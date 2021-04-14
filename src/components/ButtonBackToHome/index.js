import { Button } from "./styles";

import { useHistory } from "react-router-dom";

const ButtonBackToHome = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/home");
  };

  return (
    <Button onClick={goToHome}>
      <i class="fas fa-chevron-left"></i>
      voltar para a home
    </Button>
  );
};

export default ButtonBackToHome;
