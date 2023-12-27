import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";
import {
  ToastContainer,
  toast,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = () => {
  const [formState, setFormState] = useState({});
  const [error, setError] = useState({});

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("work");
    if (!formState.name) {
      setError({ ...error, name: true });
    }

    if (!formState.email) {
      setError({ ...error, email: true });
    }

    // //
    // if (!name) {
    //   document.getElementById(
    //     "name"
    //   ).style.border = "1px solid red";
    // } else {
    //   document.getElementById(
    //     "name"
    //   ).style.border = "1px solid green";
    // }
    // if (!email) {
    //   document.getElementById(
    //     "email"
    //   ).style.border = "1px solid red";
    // } else {
    //   document.getElementById(
    //     "email"
    //   ).style.border = "1px solid green";
    // }
    // if (!companyName) {
    //   document.getElementById(
    //     "companyName"
    //   ).style.border = "1px solid red";
    // } else {
    //   document.getElementById(
    //     "companyName"
    //   ).style.border = "1px solid green";
    // }
    // if (!contact) {
    //   document.getElementById(
    //     "contact"
    //   ).style.border = "1px solid red";
    // } else {
    //   document.getElementById(
    //     "contact"
    //   ).style.border = "1px solid green";
    // }
    if (
      !formState.name ||
      !formState.email ||
      !formState.companyName ||
      !formState.contact
    ) {
      toast.error(" Please required all Field", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    axios
      .post(
        "https://6584320c4d1ee97c6bcf32fb.mockapi.io/crud",
        formState
      )
      .then(() => {
        history("/Create");
        setError({});
      })
      .catch((error) => {
        console.error("Error", error);
      });
    const resolveAfter3Sec = new Promise(
      (resolve) => setTimeout(resolve, 500)
    );
    // toaster
    toast.promise(resolveAfter3Sec, {
      position: "top-center",
      pending: "Promise is pending",
      success: "Promise resolved 👌",
      error: "Promise rejected 🤯",
    });
  };

  // jsx
  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit}>
        <h2>User Profile</h2>
        <div className="form-group">
          <label htmlFor="email">
            Full Name:
          </label>
          <div className="relative">
            <input
              className="form-control"
              type="text"
              required=""
              placeholder="Type your name here"
              onChange={({ target }) =>
                setFormState({
                  ...formState,
                  name: target.value,
                })
              }
              style={{
                border: error.name
                  ? "1px solid red"
                  : "",
              }}
            />
            <i className="fa fa-user"></i>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email address:
          </label>
          <div className="relative">
            <input
              className="form-control"
              id="email"
              type="email"
              required=""
              placeholder="Type your email address"
              onChange={({ target }) =>
                setFormState({
                  ...formState,
                  email: target.value,
                })
              }
            />
            <i className="fa fa-envelope"></i>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Contact Number:
          </label>
          <div className="relative">
            <input
              className="form-control"
              id="contact"
              type="text"
              required=""
              placeholder="Type your Mobile Number"
              onChange={({ target }) =>
                setFormState({
                  ...formState,
                  contact: target.value,
                })
              }
            />
            <i className="fa fa-phone"></i>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Company Name:
          </label>
          <div className="relative">
            <input
              className="form-control"
              id="companyName"
              required=""
              placeholder="Mention your company link(url)"
              onChange={({ target }) =>
                setFormState({
                  ...formState,
                  companyName: target.value,
                })
              }
            />
            <i className="fa fa-building"></i>
          </div>
        </div>

        <div className="tright">
          <a href="/">
            <button
              className="movebtn movebtnre"
              type="Reset">
              <i className="fa fa-fw fa-refresh"></i>{" "}
              Reset{" "}
            </button>
          </a>
          <a href="/">
            <button
              className="movebtn movebtnsu"
              type="Submit">
              Submit
              <i className="fa fa-fw fa-paper-plane"></i>
            </button>
          </a>
          <ToastContainer />
        </div>
      </form>
    </>
  );
};
export default Form;
