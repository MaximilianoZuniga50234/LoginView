import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [users, setUsers] = useState([]);
  const usersArray = [
    {
      id: 0,
      userName: "Maxi",
      email: "REDligning@gmail.com",
      password: "1234",
    },
    {
      id: 1,
      userName: "Ixam",
      email: "REDligning2@gmail.com",
      password: "4321",
    },
  ];

  useEffect(() => {
    setUsers(usersArray);
  }, []);

  const registerUser = (
    userNameProp,
    emailProp,
    passwordProp,
    confirmPasswordProp
  ) => {
    if (passwordProp === confirmPasswordProp) {
      setUsers([
        ...users,
        {
          id: users.length,
          userName: userNameProp,
          email: emailProp,
          password: passwordProp,
        },
      ]);
      Swal.fire({
        icon: "success",
        title: "oa",
        text: "User registration success",
        showConfirmButton: false,
        timer: 1200,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Ops...",
        text: "Looks like the passwords doesn't match",
      });
    }
  };

  const loginUser = (identifierProp, passwordProp) => {
    users.map((user) => {
      if (
        (identifierProp === user.userName || identifierProp === user.email) &&
        passwordProp === user.password
      ) {
        Swal.fire({
          icon: "success",
          title: "oa",
          text: "Login success",
          showConfirmButton: false,
          timer: 1200,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Ops...",
          text: "Username, email or password incorrect...",
        });
      }
    });
  };

  return (
    <UserContext.Provider
      value={{
        users,
        registerUser,
        loginUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
