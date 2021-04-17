import { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { ModalStyled, FadeStyled, Img } from "./styles";
import Logo from '../../images/LogoModal.svg'
import Fechar from '../../images/fechar.svg'

export default function ModalNewUser() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <FadeStyled in={open} >
          <div>
            <Img src={Fechar} alt='close' onClick={handleClose}/>
            <h2>Seja muito bem vindo ao barberstone!!!</h2>
            <p>Aqui você encontra as melhores barbearias da sua região, agenda serviços e faz novas amizades!</p>
            <img src={Logo} alt='logo' />
          </div>
        </FadeStyled>
      </ModalStyled>
    </div>
  );
}
