import Menu from "../../components/Menu";
import CardBarber from "../../components/CardBarber";
import Footer from "../../components/Footer";

import { Container, Cover, SectionCard } from "./styles";

import { menuLinkPerfil } from "../../services/menuData";

const Barbershop = () => {
  return (
    <Container>
      <Menu menuLink={menuLinkPerfil} />
      <Cover />
      <h1>melhores barbeiras para você</h1>
      <SectionCard>
        <CardBarber></CardBarber>
        <CardBarber></CardBarber>
        <CardBarber></CardBarber>
      </SectionCard>
      <Footer />
    </Container>
  );
};

export default Barbershop;
