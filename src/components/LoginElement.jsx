import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";

const LoginElement = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const { users } = useContext(UserContext);
  const navigate = useNavigate();
  let successLogin = 0;
  const [isChecked, setIsChecked] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("");

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    if(!isChecked){
      setPasswordInputType("Text");
    }else{
      setPasswordInputType("Password");
    }
  };

  const validateLoginUser = (user, identifierProp, passwordProp) => {
    if (
      (identifierProp === user.userName || identifierProp === user.email) &&
      passwordProp === user.password
    ) {
      successLogin += 1;
    } else {
      successLogin += 0;
      console.log(user.id);
    }
  };

  const loginUser = () => {
    users.map((user) => {
      validateLoginUser(user, identifier, password);
    });
    if (successLogin === 1) {
      Swal.fire({
        icon: "success",
        title: "Login success!",
        showConfirmButton: false,
        timer: 1200,
      });
      setIdentifier("");
      setPassword("");
      navigate("/home");
    } else {
      Swal.fire({
        icon: "error",
        title: "Ops...",
        text: "Username, email or password are incorrect!",
      });
    }
  };

  useEffect(() => {
    setPasswordInputType("Password");
  }, []);

  const sumbitHandler = (e) => {
    e.preventDefault();
    loginUser();
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
            type={passwordInputType}
          />
          <br />
          <div className="text-white text-xl font-medium">
            <input
              checked={isChecked}
              onChange={handleOnChange}
              type="checkbox"
            />
            See Password
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
