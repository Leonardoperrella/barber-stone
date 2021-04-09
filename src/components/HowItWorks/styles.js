import styled from "styled-components";

import background from "../../images/backgroundHome2.jpg";

export const HowItWorksContainer = styled.section`
  padding: 20px;
  background-image: url(${background});
  background-size: cover;
  background-position: right;
  color: #1b2845;

  & h1 {
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  & p {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }

  & h4 {
    font-size: 1.75rem;
    font-weight: 400;
    text-align: center;
    margin: 10px 0;
  }
`;

export const Card = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  margin: 25px auto;
`;
