import { Link } from "./styles";
import { useHistory } from "react-router-dom";

const LinkToLogin = ({ children }) => {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/");
  };

  return <Link onClick={goToLogin}>{children}</Link>;
};

export default LinkToLogin;
