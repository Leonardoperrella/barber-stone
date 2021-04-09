import styled from "styled-components";

export const ServicesProvidedContainer = styled.section`
  padding: 20px;

  & div {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
  }

  & img {
    display: block;
    margin: auto;
  }

  & h4 {
    font-weight: 400;
    font-size: 2rem;
    text-align: center;
    margin: 25px 0 0;
  }

  & p {
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.25rem;
    text-align: justify;
    margin: 5px 30px 15px;
    padding-top: 15px;
    line-height: 25px;
  }
`;
