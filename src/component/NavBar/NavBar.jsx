import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css"
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <header className="header-cont">
      <Link to="/">
      <div className="header-logo">
        <img className="header-img-logo" src="https://img.icons8.com/color/100/000000/ninja-head.png" />
        <img className="header-img-logo-text" src="https://www.ambiance-sticker.com/al_copyrighter.php?image=images/Image/sticker-graffiti-ninja-ambiance-sticker-KC_4212.png&sens=25&color=28&forcew=310&forceh=310" />
      </div>
      </Link>
      

      <nav className="header-nav">
        <ol className="header-nav-ol">
          <li className="header-nav-ol-li"><Link to="/" className="header-nav-ol-li-a">Inicio</Link></li>
          <li className="header-nav-ol-li"><Link to="/category/riñoneras" className="header-nav-ol-li-a">Riñoneras</Link></li>
          <li className="header-nav-ol-li"><Link to="/category/zapatillas" className="header-nav-ol-li-a">Zapatillas</Link></li>
        </ol>
        </nav>
    
      <CartWidget/>
    </header>
  );
}

export default NavBar;
