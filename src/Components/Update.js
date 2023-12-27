import axios from "axios";
import React, {
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const Update = () => {
  // useState
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [companyName, setComapnyName] =
    useState("");
  // navigate
  const navigate = useNavigate();
  // useEffect use localstorage
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setContact(localStorage.getItem("contact"));
    setComapnyName(
      localStorage.getItem("companyName")
    );
  }, []);
  //   update Define
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://6584320c4d1ee97c6bcf32fb.mockapi.io/crud/${id}`,
        {
          name: name,
          email: email,
          contact: contact,
          companyName: companyName,
        }
      )
      .then(() => navigate("/Create"));
    toast.success("Update");
  };
  // jsx
  return (
    <>
      <form className="form">
        <h2>Update Data</h2>
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
              defaultValue={name}
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
              type="email"
              required=""
              placeholder="Type your email address"
              onChange={(e) =>
                setEmail(e.target.value)
              }
              defaultValue={email}
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
              type="text"
              required=""
              placeholder="Type your Mobile Number"
              onChange={(e) =>
                setContact(e.target.value)
              }
              defaultValue={contact}
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
              required=""
              placeholder="Mention your company link(url)"
              onChange={(e) =>
                setComapnyName(e.target.value)
              }
              defaultValue={companyName}
            />
            <i className="fa fa-building"></i>
          </div>
        </div>
        <div className="tright">
          <a href="/">
            <button
              className="movebtn movebtnsu Updates"
              type="Submit"
              onClick={handleUpdate}>
              Update
              <i className="fa fa-fw fa-paper-plane"></i>
            </button>
          </a>
          <Toaster />
        </div>
      </form>
    </>
  );
};
export default Update;
