import React, { useEffect, useState } from "react";
import PatientData from "../PatientData/PatientData"
import axios from "axios"

const PatientCard = () => {

const [patient, setPatient] = useState({});  
const CLINICAPPDATA = "pacientes-9c028";

useEffect(() => {
  axios.get(`https://${CLINICAPPDATA}.firebaseio.com/pacient.json`)
  .then(({data}) => setPatient(data));
}, [])

  return (
    <div className="card text-center">
      <div className="card-body"><h1>Datos del Paciente</h1></div>
      { Object.keys(patient).map((pacient) => {
        return <PatientData name={patient[pacient].name} age={patient[pacient].age} phone={patient[pacient].phone} mail={patient[pacient].mail} bloodType={patient[pacient].bloodType} diseases={patient[pacient].diseases} allergy={patient[pacient].allergy} />;
      }) }
      <button type="button" className="btn btn-secondary btn-lg btn-block">Ir a la nota médica</button>
    </div>
  );
};

export default PatientCard;
