import Menu from '../../components/Menu'
import { menuLinkPerfilBarber } from '../../services/menuData'
import { BodyPage, BgPerfil, ImgPerfil, Nome, TextoDescritivo, 
         Icon, IconePequeno, Logo, Descricao } from './styles'
import CardClient from '../../components/CardClient';
import FormProfileBarberShop from '../../components/FormProfileBarbershop';

const BarberPerfilPage = () => {
  return (
    <BodyPage>
      <Menu menuLink={menuLinkPerfilBarber} />
      <BgPerfil src='./img/imgBgBarberProfile.png' alt='' />
      <ImgPerfil src='./img/imgPerfilBarber.png' alt='' />
      <Nome>Barbearia do seu Zé</Nome>
      <TextoDescritivo>Aqui você encontra o melhor serviço da região para cabelo e barba, além de ótimo atendimento!</TextoDescritivo>
      <Icon src='./img/iconNovoFuncionario.png' alt='' />
      <IconePequeno src='./img/imgAgendamentos.png' alt='' />
      <TextoDescritivo>Seus clientes agendados</TextoDescritivo>
      <CardClient />
      <IconePequeno src='./img/imgAtualizar.png' alt='' />
      <TextoDescritivo>Atualizar Dados</TextoDescritivo>
      <FormProfileBarberShop />
      <Logo src='./img/imgLogo.png' alt='logo' />
      <Descricao>Desenvolvido por <span style={{color:'#BB8C4B'}}>squad 2</span></Descricao>
    </BodyPage>
  );
};

export default BarberPerfilPage;
