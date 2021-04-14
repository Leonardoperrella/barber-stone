import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [barberUsers, setBarberUsers] = useState();

  const getUsers = () => {
    api
      .get("/users")
      .then((response) => {
        const object = {};
        response.data.forEach((obj) => {
          object[obj.id] = [obj.name, obj.lastName];
        });
        setBarberUsers(response.data.filter(e=>e.isBarber));
        setUsers(object);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <UsersContext.Provider value={{ users, setUsers, getUsers, barberUsers, setBarberUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
