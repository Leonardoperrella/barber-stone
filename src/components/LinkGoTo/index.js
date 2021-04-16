import { Link } from "./styles";
import { useHistory } from "react-router-dom";

const LinkGoTo = ({ children, to, isRegister }) => {
  const history = useHistory();

  const handleGoTo = (to) => {
    history.push({pathname: to, state: isRegister && true })
  };

  return <Link onClick={() => handleGoTo(to)}>{children}</Link>;
};

export default LinkGoTo;
