import { Button } from "./styles";

import { useHistory } from "react-router-dom";

const ButtonBackToHome = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  return (
    <Button onClick={goToHome}>
      <i className="fas fa-chevron-left"></i>
      voltar para a home
    </Button>
  );
};

export default ButtonBackToHome;
