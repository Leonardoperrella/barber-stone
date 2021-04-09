import { CoverContainer } from "./styles";

import Logo from "../../images/Logo.svg";

const Cover = () => {
  return (
    <>
      <CoverContainer>
        <img src={Logo} />

        <i class="fas fa-chevron-down"></i>
      </CoverContainer>
    </>
  );
};

export default Cover;
