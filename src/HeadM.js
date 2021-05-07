import React, { Component } from 'react'
import Grid from 'styled-components-grid';
import Capa from './Imagens/Capa.png' 


export default class HeadM extends Component{
 
    render(){
      return(
        <div>
        <div className = "Head" >
        <Grid className="Max">
            <Grid.Unit size ={2/7} className = "Imagebox">
              <img src={Capa} className="Image" />  
            </Grid.Unit>
            <Grid.Unit size ={5/7} className ="Max" >
                <h1>Pet Friend Acessories </h1>
                 <p>Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa - PB</p>
                 <p>Delivery: 35m - 1h:40m  </p>
            </Grid.Unit>
         </Grid>
        </div>
       
       <div className="SeletorMobile" >
         <Grid className = "MaxMobile" >
             <Grid.Unit size={1/5} id="Sugestão do Vendedor" className="SeletorMax"><a href="#">Sugestão do Vendedor</a></Grid.Unit>
             <Grid.Unit size={1/5} id="Brinquedos" className="SeletorMax"><a href="#">Brinquedos</a></Grid.Unit>
             <Grid.Unit size={1/5} id="Camas e Casinhas" className="SeletorMax"><a href="#">Camas e Casinhas</a></Grid.Unit>
             <Grid.Unit size={1/5} id="Coleiras" className="SeletorMax"><a href="#">Coleiras</a></Grid.Unit>
             <Grid.Unit size={1/5} id="Ossos e Petiscos" className="SeletorMax"><a href="#">Ossos e Petiscos</a></Grid.Unit>
         </Grid>
        </div>
      
        </div>
      )


    }






}