import Menu from '../../components/Menu'
import { menuLinkPerfilBarber } from '../../services/menuData'
import { BodyPage, BgPerfil, ImgPerfil, Nome, TextoDescritivo, 
         Icon, ImgLazer, Logo, Descricao } from './styles'
import CardClient from '../../components/CardClient';
import FormProfileBarberShop from '../../components/FormProfileBarbershop';

const BarberPage = () => {
  return (
    <BodyPage>
      <Menu menuLink={menuLinkPerfilBarber} />
      <BgPerfil src='./img/imgBgBarberProfile.png' alt='' />
      <ImgPerfil src='./img/imgPerfilBarber.png' alt='' />
      <Nome>Barbearia do seu Zé</Nome>
      <TextoDescritivo style={{fontSize:'32px'}}>Aqui você encontra o melhor serviço da região para cabelo e barba, além de ótimo atendimento!</TextoDescritivo>
      <TextoDescritivo style={{}} >rua mimosa, 1234. Curitiba, paraná</TextoDescritivo>
      <Icon src='./img/iconAgendar.png' alt='' />
      <TextoDescritivo style={{}}>clientes agendados</TextoDescritivo>
      <CardClient />
      <TextoDescritivo style={{marginTop:'60px'}}>opções de lazer</TextoDescritivo>
      <TextoDescritivo>Sinuca</TextoDescritivo>
      <ImgLazer src='./img/imgSinuca.png' alt='' />
      <TextoDescritivo>Bar</TextoDescritivo>
      <ImgLazer src='./img/imgBar.png' alt='' />
      <TextoDescritivo>Churrasqueira</TextoDescritivo>
      <ImgLazer src='./img/imgChurrasqueira.png' alt='' />
      <TextoDescritivo>Playground</TextoDescritivo>
      <ImgLazer src='./img/imgPlayground.png' alt='' />

      <Logo src='./img/imgLogo.png' alt='logo' />
      <Descricao>Desenvolvido por <span style={{color:'#BB8C4B'}}>squad 2</span></Descricao>
    </BodyPage>
  );
};

export default BarberPage;
