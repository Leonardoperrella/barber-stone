import styled from "styled-components";

import background from "../../images/backgroundHome1.jpg";

export const CoverContainer = styled.div`
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100vh;
    background-color: rgba(27, 40, 69, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  & img {
    z-index: 1;
    width: 250px;
  }

  & i {
    z-index: 1;
    font-size: 3rem;
    position: absolute;
    bottom: 50px;
  }
`;
