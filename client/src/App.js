import LoginContext from "./context/LoginContext";
import Home from "./Pages/Home";
import UserAuth from "./Pages/UserAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <LoginContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserAuth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LoginContext>
  );
}

export default App;
