import { CoverContainer } from "./styles";

import Logo from "../../images/Logo.svg";

const Cover = () => {
  return (
    <>
      <CoverContainer>
        <img src={Logo} alt="logo" />

        <i className="fas fa-chevron-down"></i>
      </CoverContainer>
    </>
  );
};

export default Cover;
