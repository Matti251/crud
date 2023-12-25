import axios from "axios";
import React, {
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";

export const Create = () => {
  // Api url
  const url =
    "https://6584320c4d1ee97c6bcf32fb.mockapi.io/crud";
  const [data, setData] = useState([]);
  // getData read axios define
  const getData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };
  // useEffect use
  useEffect(() => {
    getData();
  }, []);
  // Delete request
  const handleDelete = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      getData();
    });
  };
  // localStorageUSe
  const setLocalStorage = (
    id,
    name,
    email,
    contact,
    companyName
  ) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("contact", contact);
    localStorage.setItem(
      "companyName",
      companyName
    );
  };

  // jsx
  return (
    <>
      <header>
        <h1>User Data</h1>
      </header>
      <article>
        <h2>How they compare</h2>

        <table className="vitamins">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Company Name</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colSpan={4}>
                <p>
                  <strong>
                    Create Read Update Delete
                  </strong>
                </p>
              </td>
            </tr>
          </tfoot>

          <tbody>
            {/* map use for data child */}
            {data.map((eachData) => (
              <tr key={eachData.id}>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>{eachData.contact}</td>
                <td>{eachData.companyName}</td>
                <td>
                  <Link to="/Update">
                    <button
                      className="movebtn movebtnre mb-0  tablebtnu"
                      type="Reset"
                      onClick={() =>
                        setLocalStorage(
                          eachData.id,
                          eachData.name,
                          eachData.email,
                          eachData.contact,
                          eachData.companyName
                        )
                      }>
                      <i className="fa fa-fw fa-refresh"></i>{" "}
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  
                    <button
                      className="movebtn movebtnsu mb-0 tablebtn"
                      type="Submit"
                      onClick={() =>
                        handleDelete(eachData.id)
                      }>
                      Delete
                      <i className="fa fa-fw fa-trash form-icon"></i>
                    </button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
};
export default Create;
