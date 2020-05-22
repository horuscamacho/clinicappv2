import React from 'react';
import {NavLink} from "react-router-dom";

const PatientLogIn = () => {
    return (
        <div className="container">
            <div className="form-group">
            <label for="CURP">CURP</label>
            <input type="email" className="form-control" id="CURP" aria-describedby="emailHelp" />
            </div>
            <div class="form-group">
            <label for="exampleInputPassword1">Contraseña del paciente</label>
            <input type="password" className="form-control" id="exampleInputPassword1"></input>
            <small id="emailHelp" className="form-text text-muted">Debe ingresar la contraseña que se le proporcionó en su primera consulta.</small>
            </div>
            <NavLink className="nav-link" to="/patient-card"><button type="submit" className="btn btn-primary">Submit</button></NavLink>
        </div>
    )
}

export default PatientLogIn
