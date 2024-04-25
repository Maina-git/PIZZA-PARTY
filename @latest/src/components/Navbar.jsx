import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"


function Navbar() {
  return (
    <div className="Nav"> 

<div className="logoName">PIZZA PARTY</div>
<section>
<Link to="/">PIZZA MENU</Link>
<Link to="/pack">MY PIZZA CART</Link>
</section>
    </div>
  )
}

export default Navbar;
