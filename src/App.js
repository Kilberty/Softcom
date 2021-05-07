import React, { Component } from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

export default class App extends Component{
 
 
 
  render(){
   if('ontouchstart' in window){
     return(
       <Mobile/>
     )
   }else
   {
     return(
       <Desktop/>
     )
   }



  }
  } 