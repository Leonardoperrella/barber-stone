import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const getUser = (userId) => {
    api
      .get(`/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <UserContext.Provider value={{ user, setUser, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
