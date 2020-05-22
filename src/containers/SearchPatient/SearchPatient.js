import React from 'react'
import {NavLink} from "react-router-dom";
const SearchPatient = () => {
    return (
        <div>
             <div className="container">
            <div className="form-group">
            <label for="CURP">CURP</label>
            <input type="email" className="form-control" id="CURP" aria-describedby="emailHelp" />
            </div>
            <div class="form-group">
            <label for="nombrepaciente">Nombre completo del paciente</label>
            <input type="text" className="form-control" id="nombrepaciente"></input>
            <small id="emailHelp" className="form-text text-muted">Debe ingresar correctamente el nombre del paciente.</small>
            </div>
            <NavLink className="nav-link" to="/doctor-consult"><button type="submit" className="btn btn-primary">Submit</button></NavLink>
        </div>
        </div>
    )
}

export default SearchPatient
