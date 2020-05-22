import React from 'react'

const PatientNote = () => {
    return (
        <div>
            <div className="card">
      <div className="card-body">
      <div>
        <div>
          <h5>Nombre del paciente</h5>
        </div>
        <div>
          <h6>{name}</h6></div>
          <br />
          <div><h5>Edad</h5></div>
          <div><h6>{age}</h6></div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default PatientNote
