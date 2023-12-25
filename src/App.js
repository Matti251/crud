import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Components/TableComponents/Create";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Form from "./Components/Form/Form";
import Update from "./Components/Update";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Form />}></Route>
          <Route
            path="/Create"
            element={<Create />}></Route>
          <Route
            path="/Update"
            element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
