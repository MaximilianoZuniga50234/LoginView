import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../app.css";
import { useContext, useState } from "react";

const RegisterElement = () => {
  const [ userName, setUserName ] = useState("");
  const [ eMail, setEMail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ passwordConfirm, setPasswordConfirm ] = useState("");
  const { registerUser } = useContext(UserContext);

  const sumbitHandler = (e) => {
    e.preventDefault();
    registerUser(userName, eMail, password, passwordConfirm);
  };

  return (
    <div className="bg-slate-900 rounded-md m-auto px-2 py-2 w-1/3 customHeight">
      <div className="bg-slate-800 rounded-md px-5 py-5 h-full text-center">
        <h1 className="mb-6 text-4xl text-center text-white font-semibold ">
          Welcome
        </h1>
        <form onSubmit={sumbitHandler} className="w-auto">
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="mt-3 mb-5 bg-blue-50 rounded-2xl px-2 py-1 text-xl font-medium"
            placeholder="Username"
          />
          <br />
          <input
          onChange={(e) => {
            setEMail(e.target.value);
          }}
            className="mb-5 bg-blue-50 rounded-2xl px-2 py-1 text-xl font-medium"
            placeholder="E-mail"
          />
          <br />
          <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
            className="mb-5 bg-blue-50 rounded-2xl px-2 py-1 text-xl font-medium"
            placeholder="Password"
            type="Password"
          />
          <br />
          <input
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
            className="mb-5 bg-blue-50 rounded-2xl px-2 py-1 text-xl font-medium"
            placeholder="Confirm password"
            type="Password"
          />
          <br />
          <button className="rounded-xl text-white text-xl font-bold bg-blue-700 border-2 border-blue-600 px-2 hover:bg-blue-600 mt-2">
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
