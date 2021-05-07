import React, { Component } from 'react'
import './Main.css'
import Head from './Head'
import produto from './ProdutoHome'
import Card from './Card'

export default class Desktop extends Component{
  
  
 
  
  
  
  render(){
   
   return(
    <div style = {{width:"100%",height:"100%"}}>
        <Head/>
         <div className = "wrapper">
           {produto.map(
           produto=><Card
           nome={produto.nome}
           custo={produto.custo}
           conteudo={produto.conteudo}
          />
          
         )}
       
         </div>
         </div>


       
  )


    }
    }

