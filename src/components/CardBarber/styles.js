import styled from "styled-components";

import background from "../../images/backgroundCard.jpg";

export const Card = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 100px;
  }

  & h4 {
    font-size: 2rem;
    font-weight: 400;
    margin: 20px 0 5px;
  }
`;

export const ScissorsRate = styled.div`
  display: flex;
  justify-content: center;

  & img {
    width: 40px;
    margin: 0 5px;
  }
`;
