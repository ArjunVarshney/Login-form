import LoginContext from "./context/LoginContext";
import Home from "./Pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { useState } from "react";

const PrivateRoute = ({ auth, ...props }) => {
  return auth ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <LoginContext>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/" element={<PrivateRoute auth={auth} />}> */}
            <Route path="*" element={<Home />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </LoginContext>
  );
}

export default App;
