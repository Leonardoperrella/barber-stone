import { ScheduleProvider } from "./Schedule";
import { UsersProvider } from "./Users";

const Providers = ({ children }) => {
  return (
    <UsersProvider>
      <ScheduleProvider>{children}</ScheduleProvider>;
    </UsersProvider>
  );
};

export default Providers;
