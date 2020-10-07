import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Thanos from "./assets/images/tenor.gif"
import 'bootstrap/dist/css/bootstrap.css'
//import '../src/Global.css'
import Card from "./components/Card"

import Box from './components/Box'


function App() {
  let listaProdutos = ["Produto 1", "Produto 2"];
  let vantagens = [
    {
      title: "Frete Grátis",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quo tenetur corrupti, deserunt mollitia repellendus illum non aliquid nihil tempora eveniet modi quam, commodi, neque ipsa tempore explicabo maxime aperiam! ",
    },
    {
      title: "Variadade de produtos",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quo tenetur corrupti, deserunt mollitia repellendus illum non aliquid nihil tempora eveniet modi quam, commodi, neque ipsa tempore explicabo maxime aperiam! ",
    },
    {
      title: "Preços de mercado",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quo tenetur corrupti, deserunt mollitia repellendus illum non aliquid nihil tempora eveniet modi quam, commodi, neque ipsa tempore explicabo maxime aperiam! ",
    },
  ];


  return (
    <div>
      <Header />
      <main>
        <img src={Thanos} alt="thanos" />
        <h1>{listaProdutos.map(function (produto, index) {
          return (
            <Card key={index} titulo={produto} estilo='produto' />
          )
        })}</h1>
      </main>

      <Box>

        {vantagens.map(function (vantagem, index) {
          return (
            <Card key={index} titulo={vantagem.title} descricao={vantagem.description} />
          )

        })}

        <Card titulo="ai sim" descricao='dlsdlksdlkskdls' />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
