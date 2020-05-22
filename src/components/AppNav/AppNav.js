import React, { useState } from "react";
import { link, Link } from "react-router-dom";

const AppNav = () => {

  const [collapse, setCollapse] = useState(true);

  const handleToggle = () => {
    setCollapse(!collapse);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        ClinicApp
      </a>
      <button
        onClick={handleToggle}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${collapse && 'collapse'} navbar-collapse`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/" >
              Inicio <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about-us" >
              Nosotros 
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/patient" >
              Paciente 
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/doctor" >
              Médicos 
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/contact" >
              Contacto 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppNav;
