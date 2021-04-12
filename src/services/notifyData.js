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

export const notifyRegisterSuccess = () =>
  toast.success("Cadastrado com sucesso!", {
    autoClose: 2000,
    hideProgressBar: true,
    position: "top-center",
  });
