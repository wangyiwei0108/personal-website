import React, { useState } from 'react';

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const setMenuFalse = () => {
    if(window.innerWidth >= 550) {
      setMenu(false)
    } else {
      return;
    }
  };

  window.addEventListener('resize', setMenuFalse);

  return(
      <nav className="navbar__container">
        <a className="navbar__copy" href="#top" onClick={() => setMenu(false)}>YW - 21 &copy;</a>
        <div className={menu? "navbar__links active" : "navbar__links"}>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#project" onClick={() => setMenu(false)}>Project</a>
          <a href="#experience" onClick={() => setMenu(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
        </div>
        <div className="navbar__menu" onClick={() => setMenu(!menu)}>
          <i className={menu? "fas fa-times" : "fa fa-bars"}></i>
        </div>
      </nav>
  )
}

export default Navbar;