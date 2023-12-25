import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  // use state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [companyName, setComapnyName] =
    useState("");

  // useavigate
  const history = useNavigate();
  // btn submit function & axios
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("work");
    // if else use required field
    if (!name) {
      document.getElementById(
        "name"
      ).style.border = "1px solid red";
    } else {
      document.getElementById(
        "name"
      ).style.border = "1px solid green";
    }
    if (!email) {
      document.getElementById(
        "email"
      ).style.border = "1px solid red";
    } else {
      document.getElementById(
        "email"
      ).style.border = "1px solid green";
    }
    if (!companyName) {
      document.getElementById(
        "companyName"
      ).style.border = "1px solid red";
    } else {
      document.getElementById(
        "companyName"
      ).style.border = "1px solid green";
    }
    if (!contact) {
      document.getElementById(
        "contact"
      ).style.border = "1px solid red";
    } else {
      document.getElementById(
        "contact"
      ).style.border = "1px solid green";
    }
    if (
      !name ||
      !email ||
      !companyName ||
      !contact
    ) {
      alert("Please enter all required fields");
      return;
    }
    axios
      .post(
        "https://6584320c4d1ee97c6bcf32fb.mockapi.io/crud",
        {
          name: name,
          email: email,
          contact: contact,
          companyName: companyName,
        }
      )
      .then(() => {
        history("/Create");
      });
  };

  // jsx
  return (
    <>
      <form className="form">
        <h2>User Profile</h2>
        <div className="form-group">
          <label htmlFor="email">
            Full Name:
          </label>
          <div className="relative">
            <input
              className="form-control"
              id="name"
              type="text"
              required=""
              placeholder="Type your name here"
              onChange={(e) =>
                setName(e.target.value)
              }
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
              onChange={(e) =>
                setEmail(e.target.value)
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
              onChange={(e) =>
                setContact(e.target.value)
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
              onChange={(e) =>
                setComapnyName(e.target.value)
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
              type="Submit"
              onClick={handleSubmit}>
              Submit
              <i className="fa fa-fw fa-paper-plane"></i>
            </button>
          </a>
        </div>
      </form>
    </>
  );
};
export default Form;
