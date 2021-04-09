import styled from "styled-components";

export const Card = styled.div`
  background-color: #bb8c4b;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 50px;
  }

  & p {
    font-size: 2rem;
    color: #1b2845;
    margin: 10px;
  }
`;
