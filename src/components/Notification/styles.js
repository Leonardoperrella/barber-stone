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
  width: 100%;
  margin-top: -1vh;

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
