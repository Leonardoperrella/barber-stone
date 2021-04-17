import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const [isNew, setIsNew] = useState(true)
  
  const getUser = (userId) => {
    const token = JSON.parse(localStorage.getItem("token"));
    api
      .get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
        const u = response.data;
        if(!(!!u.phone || !!u.zipCode || !!u.city || !!u.state || !!u.address)){
          setIsNew(true)
        }else{
          setIsNew(false)
        }
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <UserContext.Provider value={{ user, setUser, getUser, isNew, setIsNew }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
