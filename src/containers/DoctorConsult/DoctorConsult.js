import React from 'react'


const Doctor = () => {
    return (
        <div className="container">
            <form>
                <div className="form-group"> 
                    <label for="presion arterial">Presión arterial</label>
                    <input type="text" class="form-control" id="presion arterial" placeholder="presion arterial"></input>
                </div>
                <div className="form-group">
                <label for="sintomas">Sintomatología</label>
                <input type="text" className="form-control" id="sintomas" placeholder="sintomatología"></input>
                </div>
                <div className="form-group"> 
                <label for="medicamentos">Medicamentos que toma</label>
                    <input type="text" className="form-control" id="medicamentos" placeholder="medicamentos"></input>
                </div>
                <div className="form-group">
                <label for="exampleFormControlTextarea1">Datos de exploración</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                <label for="exampleFormControlTextarea1">Diagnóstico</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <label for="exampleFormControlTextarea1">Tratamiento</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                            </form>
        </div>
    )
}

export default Doctor
