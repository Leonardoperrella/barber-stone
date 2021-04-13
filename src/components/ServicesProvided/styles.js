import styled from "styled-components";

export const ServicesProvidedContainer = styled.section`
  padding: 20px;
`;

export const ServiceCard = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 525px) {
    display: flex;
    max-width: 725px;
    margin: auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  & img {
    display: block;
    margin: auto;
  }

  & div {
    margin: 25px auto;
    display: flex;
    flex-direction: column;
    max-width: 725px;

    & h4 {
      font-weight: 400;
      font-size: 2rem;
      text-align: center;
      margin: 25px 0 0;

      @media screen and (min-width: 525px) {
        margin: 0;
      }
    }

    & p {
      font-family: "Josefin Sans", sans-serif;
      font-size: 1.25rem;
      text-align: justify;
      margin: 5px auto 15px;
      padding-top: 15px;
      line-height: 25px;
      max-width: 375px;

      @media screen and (min-width: 525px) {
        margin: 0 20px;
      }
    }
  }
`;

export const ServiceCardTwo = styled(ServiceCard)`
  @media screen and (min-width: 525px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;
  }
`;
