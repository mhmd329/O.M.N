import React, { useState } from 'react'

 const Anv = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }
  return (
    <header className=" row w-full text-white sc1 z-50">
    <div className=" m-auto justify-between p-4">
      {/* Left: Logo */}
      <img src='https://omn-alpha.netlify.app/resources/img/logo-white.png'
   alt='h'
   className='logo'
   />
      {/* Right: Links */}
      <nav className="hidden md:flex space-x-4 mr-5 sc1-nav">
        <a href="#sc2" >Food delivery </a>
        <a href="#sc4" >
        How it works 
</a>
        <a href="#sc5" >
        Our cities </a>
        <a href="#sc7">Sign up</a>
      </nav>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className=" md:hidden text-white focus:outline-none ml-auto boto"
      >
        {isMenuOpen ? '×' : '☰'} {/* Change to × when the menu is open */}
      </button>
      {isMenuOpen && (
      <ul className="md:hidden ">
        <li><a href="#sc2" >Food delivery </a></li>
        <li><a href="#sc4" className="block ">
        How it works 
</a></li>
        <li><a href="#sc5" className="block ">
        Our cities </a></li>
        <li><a href="#sc7" className="block ">Sign up</a></li>
      </ul>
    )}
    </div>

    {/* Dropdown Menu for Small Screens */}
    
  </header>
);
};

export default Anv;