import { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { ModalStyled, FadeStyled, Img } from "./styles";
import Logo from "../../images/LogoModal.svg";
import Fechar from "../../images/fechar.svg";
import { animateScroll as scroll } from "react-scroll";

export default function ModalNewUser() {
  const [open, setOpen] = useState(true);
  const isBarber = JSON.parse(localStorage.getItem("isBarber"));
  const handleClose = () => {
    setOpen(false);

    setTimeout(() => {
      scroll.scrollTo(0);
    }, 1000);
  };

  return (
    <div>
      <ModalStyled
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <FadeStyled in={open}>
          <div>
            <Img src={Fechar} alt="close" onClick={handleClose} />
            <h2>Seja muito bem-vindo ao barberstone!!!</h2>
            {!isBarber ? (
              <p>
                Aqui você encontra as melhores barbearias da sua região, agenda
                serviços e faz novas amizades!
              </p>
            ) : (
              <p>
                Aqui você encontra uma rede de barbearias da sua região, divulga
                serviços e consquista mais clientes!
              </p>
            )}

            <img src={Logo} alt="logo" />
          </div>
        </FadeStyled>
      </ModalStyled>
    </div>
  );
}
