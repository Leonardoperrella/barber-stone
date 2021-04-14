import Backdrop from "@material-ui/core/Backdrop";
import { useState } from "react";

import { Button, ModalStyled, FadeStyled } from "../ModalNewFunc/styles";

import FormAgendamentos from "../FormAgend";

export default function TransitionsModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        <i class="fas fa-plus-circle"></i>
        Novo Agendamento
      </Button>
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
            <h2>Agendar novo atendimento</h2>
            <h4>Barbearia do seu zé</h4>
            <FormAgendamentos />
          </div>
        </FadeStyled>
      </ModalStyled>
    </div>
  );
}
