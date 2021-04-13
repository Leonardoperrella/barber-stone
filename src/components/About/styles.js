import styled from "styled-components";

export const AboutContainer = styled.section`
  padding: 20px;

  & img {
    display: block;
    margin: auto;
    width: 50px;
    max-width: 250px;
  }

  & p {
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.25rem;
    text-align: justify;
    margin: 5px auto 0;
    padding-top: 15px;
    line-height: 25px;
    max-width: 725px;
  }
`;
