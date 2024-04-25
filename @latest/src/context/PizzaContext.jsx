import React, { createContext } from 'react'
import { useState } from 'react';
import { PIZZAS } from '../Pizzas';

export const Context=createContext(null);

const getDefault=()=>{
    let cart={}
    for(let i=1; i<PIZZAS.length + 1; i++){
        cart[i]=0;
    }
    return cart;
};


export const PizzaContext = (props) => {
const [pizzas, setPizzas]=useState(getDefault());


const add=(itemId)=>{
    setPizzas((prev)=>({...prev, [itemId] : prev[itemId] + 1}));
}
const remove=(itemId)=>{
    setPizzas((prev)=>({...prev, [itemId] : prev[itemId] - 1}));
}
const contextValue={pizzas, add, remove};

  return (
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
  )
}

