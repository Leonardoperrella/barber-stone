import styled from "styled-components";

import background from "../../images/garrafas.jpg";

export const Container = styled.section`
  text-align: center;

  & h1 {
    font-size: 3rem;
    font-weight: 400;
  }
`;

export const Cover = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 250px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.35);
    height: 250px;
    width: 100%;
  }
`;

export const SectionCard = styled.section`
  padding: 10px;
  cursor: grab;

  & li {
    display: flex;
    justify-content: center;
  }
`;
