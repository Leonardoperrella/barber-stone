import styled from "styled-components";

export const FooterContainer = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (min-width: 1024px) {
    display: none;
  }

  & img {
    width: 70vw;
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
