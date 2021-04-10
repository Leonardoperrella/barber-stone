import { Link } from "./styles";
import { useHistory } from "react-router-dom";

const LinkToHome = ({ children }) => {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/home");
  };

  return <Link onClick={goToLogin}>{children}</Link>;
};

export default LinkToHome;
