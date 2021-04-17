import { toast } from "react-toastify";
/* 
opções
toast.success
toast.warn
toast.error
toast.info
*/
export const notifyError = (error) =>
  toast.error(error, {
    autoClose: 2000,
    hideProgressBar: true,
    position: "top-center",
  });

export const notifyErrorClient = () =>
  toast.error("Erro inesperado na atualização do cadastro do cliente.", {
    autoClose: 2000,
    hideProgressBar: true,
    position: "top-center",
  });

export const notifyErrorEmployee = () =>
  toast.error("Erro inesperado na gravação do funcionário.", {
    autoClose: 2000,
    hideProgressBar: true,
    position: "top-center",
  });

export const notifyErrorLogin = () =>
  toast.error("Usario ou senha incorretos!", {
    autoClose: 2000,
    hideProgressBar: true,
    position: "top-center",
  });

export const existingEmail = () =>
  toast.error("Email já cadastrado", {
    autoClose: 2000,
    hideProgressBar: true,
    position: "top-center",
  });

export const notifyRegisterSuccess = () =>
  toast.success("Cadastrado com sucesso!", {
    autoClose: 2000,
    hideProgressBar: true,
    position: "top-center",
  });

export const notifyDeleted = () =>
  toast.success("Cancelado com sucesso!", {
    autoClose: 2000,
    hideProgressBar: true,
    position: "top-center",
  });
