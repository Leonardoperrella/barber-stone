import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState();

  const getUsers = () => {
    api
      .get("/users")
      .then((response) => {
        const object = {};
        response.data.forEach((obj) => {
          object[obj.id] = [obj.name, obj.lastname, obj.scissors];
        });
        setUsers(object);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <UsersContext.Provider value={{ users, setUsers, getUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
