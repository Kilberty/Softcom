import React, { Component } from 'react'
import HeadM from './HeadM'
import produto from './ProdutoHome'
import CardM from './CardM'

export default class Mobile extends Component{
render(){
  return(
    <div style = {{width:"100%",height:"100%"}}>
     <HeadM/>
     <div className = "wrapper">
           {produto.map(
           produto=><CardM
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