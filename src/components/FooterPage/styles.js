import styled from "styled-components";

export const FooterContainer = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  z-index: 1;
  @media screen and (max-width: 1023px) {
    display: none;
  }

  & img {
    margin: auto;
    max-width: 300px;
  }

  & h4 {
    font-size: 1.75rem;
    color: #f7f4f3;
    font-weight: 400;
    margin: 20px;

    & span {
      color: #bb8c4b;
    }
  }
`;
