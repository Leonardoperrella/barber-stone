import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & h4 {
    font-size: 1.75rem;
    font-weight: 400;
    text-align: center;
    color: #f7f4f3;

    & span {
      color: #bb8c4b;
    }
  }
`;

export const Card = styled.button`
  background-image: url(${({ image }) => image});
  background-size: cover;
  width: 100%;
  height: 275px;
  max-width: 275px;
  margin: 10px 0;
  border-radius: 20px;
  box-shadow: 5px 5px 20px -5px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  transition-duration: 5s;
  transition: box-shadow, transform, 0.2s ease-out;
  transition-property: box-shadow, transform, all;
  transition-duration: 0s, 0s, 0.2s;
  transition-timing-function: ease, ease, ease-out;
  transition-delay: 0s, 0s, 0s;
  outline: none;
  border: none;
  display: flex;

  & p {
    margin: 10px auto;
    font-family: "Bebas Neue", cursive;
    font-size: 2rem;
    color: #1b2845;

    & i {
      font-size: 2.5rem;
      margin-left: 10px;
    }
  }

  &:hover {
    transform: translateY(-6px);
  }
`;
