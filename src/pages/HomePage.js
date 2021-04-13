import Menu from "../components/Menu";
import Cover from "../components/Cover";
import About from "../components/About";
import ServicesProvided from "../components/ServicesProvided";
import HowItWorks from "../components/HowItWorks";
import RegisterSectionHomepage from "../components/RegisterSectionHomepage";
import Footer from "../components/Footer";

import { menuLinkHome } from "../services/menuData";

const HomePage = () => {
  return (
    <>
      <Menu menuLink={menuLinkHome} />
      <Cover></Cover>
      <About id="sobre" />
      <ServicesProvided id="serviços" />
      <HowItWorks id="#como-funciona" />
      <RegisterSectionHomepage id="cadastrar" />
      <Footer />
    </>
  );
};

export default HomePage;
