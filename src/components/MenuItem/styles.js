import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  text-align: left;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  z-index: 2;

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding-top: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    max-width: 75vw;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 2.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
