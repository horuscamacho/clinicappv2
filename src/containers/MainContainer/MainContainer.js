import React from 'react'
import AppNav from "../../components/AppNav/AppNav"
import TasksCard from "../../components/PatientCard/PatientCard"

const MainContainer = () => {
    return (
        <div>
            
            <div className="container">
                <TasksCard />
            </div>
        </div>
    )
}

export default MainContainer
