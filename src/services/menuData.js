const token = JSON.parse(localStorage.getItem("token"));
const isBarber = JSON.parse(localStorage.getItem("isBarber"));

export const menuLinkHome = [
  {
    anchor: true,
    to: "sobre",
    content: "sobre",
  },
  {
    anchor: true,
    to: "serviços",
    content: "serviços",
  },
  {
    anchor: true,
    to: "como-funciona",
    content: "como funciona",
  },
  {
    anchor: true,
    to: "cadastrar",
    content: "cadastrar",
  },
  {
    anchor: false,
    to: `${!token ? "/entrar" : `/perfil-${isBarber ? "barbearia" : "cliente"}`}`,
    content: `${!token ? "entrar" : "perfil"}`,
  },
];

export const menuLinkPerfil = [
  {
    anchor: false,
    to: "/",
    content: "home",
  },
  {
    anchor: false,
    to: "/barbearias",
    content: "barbearias",
  },
  {
    anchor: false,
    to: `${!token ? "/entrar" : `/perfil-${isBarber ? "barbearia" : "cliente"}`}`,
    content: `${!token ? "entrar" : "perfil"}`,
  },
];

export const menuLinkPerfilClient = [
  {
    anchor: false,
    to: "/",
    content: "home",
  },
  {
    anchor: false,
    to: "/barbearias",
    content: "barbearias",
  },
  {
    anchor: false,
    to: "/perfil-cliente",
    content: "perfil",
  },
];

export const menuLinkPerfilBarber = [
  {
    anchor: false,
    to: "/",
    content: "home",
  },
  {
    anchor: false,
    to: "/barbearias",
    content: "barbearias",
  },
  {
    anchor: false,
    to: "/perfil-barbearia",
    content: "perfil",
  },
];
