import React from "react";

const Task = ({ name, age, phone, mail, diseases, bloodType, allergy }) => {
  return (
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
          <br />
          <div><h5>Teléfono</h5></div>
          <div><h6>{phone}</h6></div>
          <br />
          <div><h5>Correo electrónico</h5></div>
          <div><h6>{mail}</h6></div>
          <br />
          <div><h5>Enfermedades Crónicas</h5></div>
          <div><h6>{diseases}</h6></div>
          <br />
          <div><h5>Tipo Sanguíneo</h5></div>
          <div><h6>{bloodType}</h6></div>
          <br />
          <div><h5>Alergias</h5></div>
          <div><h6>{allergy}</h6></div>
        </div>
      </div>
    </div>
  );
};

export default Task;
