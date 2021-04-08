import { FooterContainer } from "./styles";

import Logo from "../../images/Logo.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <img src={Logo} />
      <h4>
        Desenvolvido por <span>squad 2</span>
      </h4>
    </FooterContainer>
  );
};

export default Footer;
