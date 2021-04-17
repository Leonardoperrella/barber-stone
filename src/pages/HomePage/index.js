import Menu from "../../components/Menu";
import Cover from "../../components/Cover";
import About from "../../components/About";
import ServicesProvided from "../../components/ServicesProvided";
import HowItWorks from "../../components/HowItWorks";
import RegisterSectionHomepage from "../../components/RegisterSectionHomepage";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import { menuLinkHome } from "../../services/menuData";
import { useState } from "react";
import { useEffect } from "react";

const HomePage = () => {
  const [goRegister, setGoRegister] = useState(false);

  const isRegister = useLocation().state;

  useEffect(() => {
    setGoRegister(isRegister);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {goRegister && scroller.scrollTo("cadastrar", { offset: 10 })}
      <Menu menuLink={menuLinkHome} isRegister />
      <Cover></Cover>
      <About id="sobre" />
      <ServicesProvided id="serviços" />
      <HowItWorks id="#como-funciona" />
      <RegisterSectionHomepage id="cadastrar" name="cadastrar" />
      <Footer />
    </>
  );
};

export default HomePage;
