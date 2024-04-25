import React from 'react'
import { PIZZAS } from '../../Pizzas';
import { Context } from '../../context/PizzaContext';
import { useContext } from 'react';
import { PizzaPackItem } from './PizzaPackItem';
import "./PizzaPack.css"


export const PizzaPack=()=>{

const {pizzas}=useContext(Context);
 
  return (
    <div className="cart">
      <img src="/images/shopping-cart-304843_640.webp" className="cartImg" alt="" />
      <h1>PIZZA IN CART</h1>
      <div>
   {
    PIZZAS.map((pizza)=>{
      if(pizzas[pizza.id] !==0){
        return <PizzaPackItem data={pizza}/>
      }
    })
   }
</div>
    </div>
  )
}

