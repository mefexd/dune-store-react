import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Menu } from "/public/burger-menu.svg";
import { ReactComponent as Brand } from "/public/logo.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <Brand className="logo" />
        </div>
        <div onClick={handleShowNavbar}>
          <Menu className="burger-menu" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/womens">Womens</NavLink>
            </li>
            <li>
              <NavLink to="/mens">Mens</NavLink>
            </li>
            <li>
              <NavLink to="/accessories">Accessories</NavLink>
            </li>
            <li>
              <NavLink to="/shoes">Shoes</NavLink>
            </li>
            <li>
              <NavLink to="/sale">Sale</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
