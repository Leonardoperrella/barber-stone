import { Container, Card } from "./styles";
import Title from "../Title";
import CustomerImage from "../../images/customer.jpg";
import BarberImage from "../../images/barber.jpg";
import LinkGoTo from "../../components/LinkGoTo";
import { useHistory } from "react-router-dom";

const RegisterSectionHomepage = () => {
  const history = useHistory();

  const handleClick = (to) => {
    history.push(to);
  };
  return (
    <>
      <Container id="cadastrar">
        <Title>Cadastre-se</Title>
        <div>
          <Card
            image={CustomerImage}
            onClick={() => handleClick("/cadastro-cliente")}
          >
            <p>
              Seja um membro
              <i class="fas fa-arrow-alt-circle-right"></i>
            </p>
          </Card>
          <Card
            image={BarberImage}
            onClick={() => handleClick("/cadastro-barbearia")}
          >
            <p>
              Cadastre sua barbearia
              <i class="fas fa-arrow-alt-circle-right"></i>
            </p>
          </Card>
        </div>
        <h4>
          Já possui uma conta? Então basta{" "}
          <LinkGoTo to={"/entrar"}>entrar </LinkGoTo>e aproveitar!
        </h4>
      </Container>
    </>
  );
};

export default RegisterSectionHomepage;
