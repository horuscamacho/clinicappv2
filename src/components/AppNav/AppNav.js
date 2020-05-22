import React from "react";
import { link, Link } from "react-router-dom";

const AppNav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        ClinicApp
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link className="nav-link" to="/" >
              Inicio <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to="/about-us" >
              Nosotros 
            </Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to="/patient" >
              Paciente 
            </Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to="/doctor" >
              Médicos 
            </Link>
          </li>
          <li class="nav-item">
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
