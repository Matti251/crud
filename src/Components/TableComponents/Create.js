import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import React, {
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const Create = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const url =
    "https://6584320c4d1ee97c6bcf32fb.mockapi.io/crud";
  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setData(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
    if (!loading && data.length == 0) {
      navigate("/");
    }
  });
  // Delete request
  const handleDelete = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      getData();
    });
    if (data.length >= 1) {
      toast.success("Delete", {
        duration: 4000,
      });
    }
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
  const create = () => {
    navigate("/");
  };
  return (
    <>
      <header>
        <h1>User Data</h1>
        <button
          className="movebtn movebtnsu mb-0 tablebtn createBtn"
          type="Submit"
          onClick={create}>
          Create
          <i className="fa fa-fw fa-plus form-icon"></i>
        </button>
      </header>
      <article>
        <h2>How They compare</h2>

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
            {/* map */}
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
                  <Toaster />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <HashLoader
          color="#36d7b7"
          loading={loading}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </article>
    </>
  );
};
export default Create;
