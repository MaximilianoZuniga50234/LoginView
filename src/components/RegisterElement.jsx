import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../app.css";
import { useContext, useState, useEffect } from "react";

const RegisterElement = () => {
  const [userName, setUserName] = useState("");
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { users, addNewUser } = useContext(UserContext);
  const navigate = useNavigate();

  const registerUser = (
    userNameProp,
    emailProp,
    passwordProp,
    confirmPasswordProp
  ) => {
    if (passwordProp === confirmPasswordProp) {
      addNewUser({
        id: users.length,
        userName: userNameProp,
        email: emailProp,
        password: passwordProp,
      });
      Swal.fire({
        icon: "success",
        title: "oa",
        text: "User registration success",
        showConfirmButton: false,
        timer: 1200,
      });
      navigate("/login");
    } else {
      Swal.fire({
        icon: "error",
        title: "Ops...",
        text: "Looks like the passwords doesn't match",
      });
    }
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    registerUser(userName, eMail, password, passwordConfirm);
  };

  return (
    <div className="bg-slate-900 rounded-md m-auto px-2 py-2 w-1/3 customHeight">
      <div className="bg-slate-800 rounded-md px-5 py-5 h-full text-center">
        <label className="mb-10 text-3xl text-center text-white font-semibold ">
          Create a new account
        </label>
        <form onSubmit={sumbitHandler} className="w-auto">
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="mt-3 mb-5 bg-blue-100 rounded-2xl px-2 py-1 text-xl font-medium"
            placeholder="Username"
          />
          <br />
          <input
            onChange={(e) => {
              setEMail(e.target.value);
            }}
            className="mb-5 bg-blue-100 rounded-2xl px-2 py-1 text-xl font-medium"
            placeholder="E-mail"
          />
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="mb-5 bg-blue-100 rounded-2xl px-2 py-1 text-xl font-medium"
            placeholder="Password"
            type="Password"
          />
          <br />
          <input
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
            className="mb-5 bg-blue-100 rounded-2xl px-2 py-1 text-xl font-medium"
            placeholder="Confirm password"
            type="Password"
          />
          <br />
          <button className="rounded-lg text-white text-lg font-bold bg-blue-700 border-2 border-blue-600 px-2 hover:bg-blue-600 mt-2">
            Confirm
          </button>
          <br />
          <div className="text-white mt-5 text-lg">
            <Link to="/login">have an account? Sing in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterElement;
