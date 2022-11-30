import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [users, setUsers] = useState([]);
  const usersArray = [
    {
      id: 0,
      userName: "a",
      email: "REDligning@gmail.com",
      password: "1234",
    },
    {
      id: 1,
      userName: "b",
      email: "REDligning2@gmail.com",
      password: "1234",
    },
    {
      id: 2,
      userName: "c",
      email: "REDligning3@gmail.com",
      password: "1234",
    },
  ];

  useEffect(() => {
    setUsers(usersArray);
  }, []);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addNewUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
