import React from 'react'
import {NavLink} from "react-router-dom";

const DoctorLogIn = () => {
    return (
        <div>
            <div className="container">
                <div><h1>Ingrese sus datos Doctor</h1></div>
            <div className="form-group">
            <label for="cedula">Cédula Profesional</label>
            <input type="email" className="form-control" id="cedula" aria-describedby="emailHelp" />
            </div>
            <div class="form-group">
            <label for="exampleInputPassword1">Contraseña del médico</label>
            <input type="password" className="form-control" id="exampleInputPassword1"></input>
            <small id="emailHelp" className="form-text text-muted">Ingrese su contraseña</small>
            </div>
            <NavLink className="nav-link" to="/search-patient"><button type="submit" className="btn btn-primary">Submit</button></NavLink>
        </div>
        </div>
    )
}

export default DoctorLogIn
