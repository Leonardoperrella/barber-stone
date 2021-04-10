import { FooterContainer } from "./styles";

import Logo from "../../images/Logo.svg";

const FooterPage = () => {
  return (
    <FooterContainer>
      <img src={Logo} alt="logo" />
      <h4>
        Desenvolvido por <span>squad 2</span>
      </h4>
    </FooterContainer>
  );
};

export default FooterPage;
