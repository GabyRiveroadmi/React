import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div>
      <h1>Pet Shop Nieve</h1>  
    
     <button>Inicio</button>
     <button>Accesorios</button>
     <button>Alimentos</button>
     <button>Sale</button>


      <CartWidget />
    </div>
  )
}

export default NavBar