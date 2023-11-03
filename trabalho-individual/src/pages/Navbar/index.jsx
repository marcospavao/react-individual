import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Navbar() {
  return (
    <div className="barraMenu">
      <nav>
        <ul>
          <li>
            <Link to="/login">Entrar</Link>
          </li>
          <li>
            <Link to="/">Home noticias</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
