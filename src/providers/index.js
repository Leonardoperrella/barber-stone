import { ScheduleProvider } from "./Schedule";
import { UsersProvider } from "./Users";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <UsersProvider>
        <ScheduleProvider>{children}</ScheduleProvider>
      </UsersProvider>
    </UserProvider>
  );
};

export default Providers;
