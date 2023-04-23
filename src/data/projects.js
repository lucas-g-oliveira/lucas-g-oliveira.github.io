import t from "./tecnologies";
import tfc from "../images/tfc.png";
import appDelivery from "../images/app-delivery.png";
import starWarsPlanetSearch from "../images/starwars-planet-search.png";
import profile from "../data/dataProfile";

const repo = (name) => profile.gitHub + name;

const projectsList = [
  {
    name: 'App de Delivery',
    repository: repo('app-delivery'),
    imgURL: appDelivery,
    movieURL:false, //'https://www.youtube.com/embed/fuy-Eh8D1TU',
    deployUrl: false,
    tecnologies: [
      t.html,
      t.docker,
      t.javascript,
      t.jwt,
      t.css,
      t.react,
      t.express,
      t.sequelize,
      t.mysql,
    ],
    description: "Desenvolver o frontend e o backend de um sistema para gerênciar pedidos de um delivery de cervejas. O projeto tem o fluxo de pessoa cliente, onde é possível criar um novo usuário ou fazer login, e com o acesso validado, adicionar produtos ao carrinho, e efetuar checkout escolhendo a pessoa vendedora e prenchendo o endereço. Já no fluxo de pessoa vendedora, é possível alterar o status do pedido, para 'Preparando' ou 'Enviado', e a partir daí a pessoa cliente pode marcar o pedido como recebido.",
  }, {
    name: 'Trybe Futebol Clube',
    repository: repo('TFC-gerir-classificacao-em-um-campeonato'),
    imgURL: tfc,
    movieURL:null,
    deployUrl: false,
    tecnologies: [
      t.typescrypt,
      t.mongodb,
      t.mocha,
      t.chai,
      t.sinon,
      t.docker,
      t.express,
      t.ubuntu,
    ],
    description: "O TFC é um sistema de gerenciamento de campeonado onde é possível adicionar novos jogos, finalizar e alterar placares de partidas em andamento, e ver as classificações por visitantes, times da casa ou geral. Tudo feito a partir de informações básicas da partida.",
  }, {
    name: 'StarWars PlanetSearch',
    repository: repo('starwars-planets-search'),
    imgURL: starWarsPlanetSearch,
    movieURL:null,
    deployUrl: false,
    tecnologies: [
      t.mysql,
      t.reactRouter,
      t.rtl,
    ],
    description: "O projeto consiste em consumir uma API com informações dos planetas do Star Wars e criar filtros avançados utilizando high order functions e aplicar-los em tempo real, utilizando contextAPI na gerência de estado da aplicação.",
  }
];

export default projectsList;
