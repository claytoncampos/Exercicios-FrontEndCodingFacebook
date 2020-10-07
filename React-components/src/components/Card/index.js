import React from 'react';
import './style.css'

function Card(props) {
  return (
    <div className={"card " + props.estilo}>
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.descricao}</p>
      </div>
    </div>
  );
}

Card.defaultProps = {
  estilo: "vantagem",
  titulo: "Titulo teste"
}
export default Card;