import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import LoginElement from "./LoginElement";
import RegisterElement from "./RegisterElement";
import "../app.css"

const Layout = () => {
  return (
    <div className="classCenterElement">
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<Home/>} path="/home" />
          <Route element={<LoginElement />} path="/login" />
          <Route element={<RegisterElement />} path="/sing-up" />
          <Route element={<h1 className="text-5xl text-white">404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
