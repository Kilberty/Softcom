import React, { Component } from 'react'
import './Main.css'
import Grid from 'styled-components-grid';
import Capa from './Imagens/Capa.png' 
export default class Head extends Component{
  render(){
      return(
       <div>
       <div className = "Head" >
        <Grid className="Max">
            <Grid.Unit size ={1/7} className = "Imagebox">
              <img src={Capa} className="Image" />  
            </Grid.Unit>
            <Grid.Unit size ={6/7} className ="Max" >
                <h1>Pet Friend Acessories </h1>
                 <p>Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa - PB</p>
                 <p>Delivery: 35m - 1h:40m  </p>
            </Grid.Unit>
         </Grid>
        </div>
       
       <div className="Seletor" >
         <Grid className="Grid" >
             <Grid.Unit size={1/5} className="SeletorMax"><a href="#" title="Sugestão do vendedor" onClick="Sugestao">Sugestão do Vendedor</a></Grid.Unit>
             <Grid.Unit size={1/5} id="Brinquedos" className="SeletorMax"><a href="#" title="Brinquedos">Brinquedos</a></Grid.Unit>
             <Grid.Unit size={1/5} id="Camas e Casinhas" className="SeletorMax"><a href="#" title="Camas e Casinhas">Camas e Casinhas</a></Grid.Unit>
             <Grid.Unit size={1/5} id="Coleiras" className="SeletorMax"><a href="#" title="Coleiras">Coleiras</a></Grid.Unit>
             <Grid.Unit size={1/5} id="Ossos e Petiscos" className="SeletorMax"><a href="#" title="Ossos e Petiscos">Ossos e Petiscos</a></Grid.Unit>
         </Grid>
       </div>
       </div>
      )
  }



}