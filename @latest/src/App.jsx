import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Menu} from './pages/menu/Menu';
import {PizzaPack} from './pages/pizzapack/PizzaPack';
import { PizzaContext } from './context/PizzaContext';
import Footer from './components/Footer';

function App() {
  return (
    <PizzaContext>
  <Router>
  <Navbar/>
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/pack" element={<PizzaPack/>}/>
      </Routes>
      <Footer/>
    </Router>
    </PizzaContext>
  
  )
}

export default App;




