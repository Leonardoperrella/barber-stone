import { Container, Card } from "./styles";

import Title from "../Title";

import CustomerImage from "../../images/customer.jpg";
import BarberImage from "../../images/barber.jpg";

const RegisterSectionHomepage = () => {
  return (
    <>
      <Container>
        <Title>Cadastre-se</Title>
        <div>
          <Card image={CustomerImage}>
            <p>
              Seja um membro
              <i class="fas fa-arrow-alt-circle-right"></i>
            </p>
          </Card>
          <Card image={BarberImage}>
            <p>
              Cadastre sua barbearia
              <i class="fas fa-arrow-alt-circle-right"></i>
            </p>
          </Card>
        </div>
        <h4>
          Já possui uma conta? Então basta <span>entrar</span> e aproveitar!
        </h4>
      </Container>
    </>
  );
};

export default RegisterSectionHomepage;
