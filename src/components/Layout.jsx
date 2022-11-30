import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import LoginElement from "./LoginElement";
import RegisterElement from "./RegisterElement";

const Layout = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-1/4"> </div>
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
