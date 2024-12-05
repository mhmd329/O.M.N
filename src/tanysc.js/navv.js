import React, { useEffect, useState } from 'react'


 const Navv = () => {
  const [showSecondNavbar, setShowSecondNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section2 = document.getElementById("section2");
      if (!section2) return;

      const section2Top = section2.offsetTop;
      const scrollPosition = window.scrollY;

      // Show second navbar when scrolled into section2
      if (scrollPosition >= section2Top) {
        setShowSecondNavbar(true);
      } else {
        setShowSecondNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }
    
  return (
<section id='section2'>
     {showSecondNavbar && (
    <header className=" second-navbar  w-full text-white sc2 z-50">
    <div className=" mx-auto flex items-center justify-between p-4">
      {/* Left: Logo */}
      <img src='https://omn-alpha.netlify.app/resources/img/logo.png'
   alt='h'
   className='logo2'
   />
      {/* Right: Links */}
      <nav className="hidden md:flex space-x-4 mr-5">
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
        className=" md:hidden  focus:outline-none ml-auto boto"
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
  )}
  </section>
  )
}
export default Navv