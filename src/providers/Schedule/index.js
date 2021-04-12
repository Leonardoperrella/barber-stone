import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";

const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [schedule, setSchedule] = useState([]);

  const getSchedule = (url) => {
    api
      .get(url)
      .then((response) => {
        setSchedule(response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <ScheduleContext.Provider value={{ schedule, setSchedule, getSchedule }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export const useSchedule = () => useContext(ScheduleContext);
