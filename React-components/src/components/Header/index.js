import React from "react";
//import ImgThanos from "../../assets/images/tenor.gif";

function Header() {
  let nome = "Clayton"

  return (
    <header>
      <h1 className="titulo">Logo</h1>
      <ul>
        <li>home</li>
        <li>Contato</li>
        {nome ? (
          <li>Olá {nome}</li>
        ) :
          (<li>Login</li>)
        }
      </ul>
    </header>
  );
}

export default Header;
