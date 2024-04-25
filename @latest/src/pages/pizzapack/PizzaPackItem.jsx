
import React from 'react'
import "./PizzaPackItem.css"
import { useContext } from 'react';
import { Context } from '../../context/PizzaContext';

export const PizzaPackItem = (props) => {

const {remove}=useContext(Context);
const {id, pizzaName, pizzaImg, price}=props.data;
  return (
    <div key={id} className="PizzaPackItem">
      <img src={pizzaImg} alt="" />
      <section className="description">
      <h2>{pizzaName}</h2>
      <p className="price">${price}</p>
      <button className="btn" onClick={()=>remove(id)}>REMOVE FROM CART</button>
      </section>
    </div>
  )
}

