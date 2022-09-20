import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css"
function NavBar() {
  return (
    <header className="header-cont">
      <div className="header-logo">
        <img src="https://img.icons8.com/color/100/000000/ninja-head.png" />
        <h1 className="header-h1">Horuk Games</h1> 
      </div>

      <nav className="header-nav">
        <ol className="header-nav-ol">
          <li className="header-nav-ol-li"><a href="#" className="header-nav-ol-li-a">Inicio</a></li>
          <li className="header-nav-ol-li"><a href="#" className="header-nav-ol-li-a">Categorias</a></li>
          <li className="header-nav-ol-li"><a href="#" className="header-nav-ol-li-a">Ofertas</a></li>
          <li className="header-nav-ol-li"><a href="#" className="header-nav-ol-li-a">Ayuda</a></li>
        </ol>
        </nav>
    
      <CartWidget/>
    </header>
  );
}

export default NavBar;
