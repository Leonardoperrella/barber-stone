import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NoticiationContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressBarClassName: "progress",
})`
  /* .toast-container */
  width: 100vw;

  @media screen and (min-width: 525px) {
    width: 500px;
  }

  .Toastify__toast--info {
    background: #4278f1;
  }
  .Toastify__toast--success {
    background: #4caf50;
  }
  .Toastify__toast--warning {
    background: #baaa1d;
  }
  .Toastify__toast--error {
    background: #ec8989;
  }
`;
