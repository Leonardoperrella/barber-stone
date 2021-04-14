import { Link } from "./styles";
import { useHistory } from "react-router-dom";

const LinkGoTo = ({ children, to }) => {
  const history = useHistory();

  const handleGoTo = (to) => {
    history.push(to);
  };

  return <Link onClick={() => handleGoTo(to)}>{children}</Link>;
};

export default LinkGoTo;
