import React from 'react'
import "./Menu.css"
import { PIZZAS } from '../../Pizzas'; 
import {Pizza} from './Pizza';

export const Menu=()=>{
  return (
    <div className="menu">
        <img src="/images/pizza-8635314_1280.jpg  " alt="" className="menu-img"/>

<h2 className="menu-h2">ORDER NOW</h2>
<div className="pizzas"> 
{PIZZAS.map((item)=>(<Pizza data={item}/>))}
  </div>
    </div>
  )
}


