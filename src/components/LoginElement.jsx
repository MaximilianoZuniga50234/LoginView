import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const LoginElement = () => {
  const [ identifier, setIdentifier ] = useState("");
  const [ password, setPassword ] = useState("");
  const { loginUser } = useContext(UserContext);

  const sumbitHandler = (e) => {
    e.preventDefault();
    loginUser(identifier, password);
    setPassword("");
  };

  return (
    <div className="bg-slate-900 rounded-md m-auto px-2 py-2 w-1/3 h-2/5">
      <div className="bg-slate-800 rounded-md px-5 py-5 h-full text-center">
        <h1 className="mb-5 text-4xl text-center text-white font-semibold ">
          Welcome
        </h1>
        <form onSubmit={sumbitHandler} className="w-auto">
          <input
            onChange={(e) => {
              setIdentifier(e.target.value);
            }}
            className="mt-3 mb-5 bg-blue-50 rounded-2xl px-2 py-1 text-xl font-medium"
            placeholder="Username o E-mail"
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
          <div className="text-white text-xl font-medium">
            <input type="checkbox" /> See Password
          </div>
          <br />
          <button className="rounded-xl text-white text-xl font-bold bg-blue-700 border-2 border-blue-600 px-2 hover:bg-blue-600 mt-2">
            Sing in
          </button>
          <br />
          <div className="text-white mt-7 text-lg">
            <Link to="/sing-up">Do not have an account? Sing up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginElement;
