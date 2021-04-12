import { Link } from "./styles";
import { useHistory } from "react-router-dom";

const LinkToHome = ({ children }) => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/home");
  };

  return <Link onClick={goToHome}>{children}</Link>;
};

export default LinkToHome;
