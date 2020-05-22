import React from 'react'
import AppNav from "../../components/AppNav/AppNav"
import TasksCard from "../../components/PatientCard/PatientCard"

const MainContainer = () => {
    return (
        <div>
          
            <div className="container">
                <div className="card bg-dark text-white" >
                <img className="img-fluid" src={require("../../img/doctores.jpg")} />
                </div>
            </div>
        </div>
    )
}

export default MainContainer
