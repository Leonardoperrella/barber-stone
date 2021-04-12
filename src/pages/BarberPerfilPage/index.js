import Menu from '../../components/Menu'
import { menuLinkPerfilBarber } from '../../services/menuData'
import {
  BodyPage, BgPerfil, ImgPerfil, Nome, TextoDescritivo,
  Icon, IconePequeno, Logo, Descricao,
} from './styles'
import CardClient from '../../components/CardClient';
import FormProfileBarberShop from '../../components/FormProfileBarbershop';

import React, { useState } from 'react';
import GlobalModal from '../../components/GlobalModal';

import { BtnOpenModal, BackDrop} from '../../components/GlobalModal/styles'


const BarberPerfilPage = () => {

  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  return (
    <>


      <BodyPage>
        <Menu menuLink={menuLinkPerfilBarber} />
        <BgPerfil src='./img/imgBgBarberProfile.png' alt='' />

        {show ? <BackDrop onClick={closeModalHandler} > </BackDrop> : null}
        <BtnOpenModal onClick={() => setShow(true)} > </BtnOpenModal>
        <GlobalModal show={show} close={closeModalHandler} />
                
        <ImgPerfil src='./img/imgPerfilBarber.png' alt='' />
        <Nome>Barbearia do seu Zé</Nome>
        <TextoDescritivo>Aqui você encontra o melhor serviço da região para cabelo e barba, além de ótimo atendimento!</TextoDescritivo>


        <IconePequeno src='./img/imgAgendamentos.png' alt='' />
        <TextoDescritivo>Seus clientes agendados</TextoDescritivo>
        <CardClient />
        <IconePequeno src='./img/imgAtualizar.png' alt='' />
        <TextoDescritivo>Atualizar Dados</TextoDescritivo>
        <FormProfileBarberShop />
        <Logo src='./img/imgLogo.png' alt='logo' />
        <Descricao>Desenvolvido por <span style={{ color: '#BB8C4B' }}>squad 2</span></Descricao>
      </BodyPage>

    </>
  );
};

export default BarberPerfilPage;
