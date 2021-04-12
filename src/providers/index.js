import { ScheduleProvider } from "./Schedule";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ScheduleProvider>{children}</ScheduleProvider>;
    </UserProvider>
  );
};

export default Providers;
