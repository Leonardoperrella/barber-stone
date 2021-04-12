import React from 'react';
import { ModalWrapper, ModalHeader, ModalHeaderSpan, ModalContent, ModalBody, ModalBodyP, ModalBodyH4 } from './styles.js'
import FormNovoFuncionario from '../FormNovoFuncionario'


const GlobalModalNovoFuncionario = ({ show, close }) => {
  return (

    <ModalWrapper
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <ModalHeader>

        Cadastrar novo funcionário

        <ModalHeaderSpan onClick={close}> x </ModalHeaderSpan>

      </ModalHeader>

      <ModalContent>

        <p> Barbearia do seu zé </p>

        <FormNovoFuncionario />

      </ModalContent>

    </ModalWrapper>
  )
};

export default GlobalModalNovoFuncionario