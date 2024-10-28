import React from 'react'
import './style.css'




const Navbar = () => {

  const openClick = () => {
    let open = document.querySelector('.box');
    open.style.display = 'block'
    open.style.display = 'flex'
  };
  
  const closeClick = () => {
    document.querySelector('.box').style.display = 'none';
  };



  return (
    <div className="containerNavbar">
      <div className="logo">React</div>
      <div className="links">
        <button>Home</button>
        <button>About</button>
        <button>Services</button>
        <button>Contact</button>
        <button id='signIn'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
