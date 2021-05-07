import React from 'react';
import PropTypes from 'prop-types';
import  Frame1 from './Imagens/Frame1.png'
import './Main.css'

export default function Card({ nome, custo,conteudo}) {
  return(
    <div className = "card" >
      <div><img src={Frame1} className="Image" style={{padding:"5px",marginLeft:"15px"}} /></div>
      <div className="NomeCard">{nome}</div>
      <div>{custo}</div>


      
    </div>
  )
}

Card.propTypes = {
  
  nome: PropTypes.string.isRequired,
  custo: PropTypes.number.isRequired,
  conteudo:PropTypes.string.isRequired
}