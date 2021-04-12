import { createContext, useContext, useState, useEffect } from "react";

const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [schedule, setSchedule] = useState([]);

  return (
    <ScheduleContext.Provider value={{ schedule, setSchedule }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export const useSchedule = () => useContext(ScheduleContext);
