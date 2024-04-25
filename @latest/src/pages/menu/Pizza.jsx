import React, { useContext } from 'react'
import "./Pizza.css"
import { Context } from '../../context/PizzaContext';


export const Pizza = (props) => {
const {id, pizzaName, pizzaImg, price}=props.data;
const {add, pizzas}=useContext(Context);

const pizzaItemAmount=pizzas[id];

  return (
    <div key={id} className="item">
      <img  src={pizzaImg} alt="" />
      <h2>{pizzaName}</h2>
      <p>${price}</p>
      <button className="btn" onClick={()=>add(id) (alert("You can check your Pizza on MY Pizza Cart"))}>
        BUY PIZZA  { pizzaItemAmount > 0 && <>({pizzaItemAmount})</> }
          </button>
    </div>
  )
}


