import React, { useEffect, useState } from "react";
import PatientData from "../PatientData/PatientData"
import { useParams } from 'react-router-dom';
import axios from "axios"

const PatientCard = () => {
  let { id } = useParams();
  console.log(id);

  const [patient, setPatient] = useState({});  
  const CLINICAPPDATA = "pacientes-9c028";

  useEffect(() => {
    axios.get(`https://${CLINICAPPDATA}.firebaseio.com/pacient.json`)
    .then(({data}) => setPatient(data[id]));
  }, [])

  return (
    <div className="card text-center">
      <div className="card-body"><h1>Datos del paciente</h1></div>
      {
        patient ?
          <PatientData 
          key={patient.name}
          name={patient.name} 
          age={patient.age} 
          phone={patient.phone} 
          mail={patient.mail} 
          bloodType={patient.bloodType} 
          diseases={patient.diseases} 
          allergy={patient.allergy} />
        :
          <div className='mb-5'>
            El paciente con id {id} no existe
          </div>
      }
      
      <button type="button" className="btn btn-secondary btn-lg btn-block">Ir a la nota médica</button>
    </div>
  );
};

export default PatientCard;
