import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainContainer from "./containers/MainContainer/MainContainer";
import PatientLogIn from "./containers/PatientLogIn/PatientLogIn";
import AboutUs from "./containers/AboutUs/AboutUs";
import Contact from "./containers/Contact/Contact";
import DoctorConsult from "./containers/DoctorConsult/DoctorConsult";
import PatientCard from "./containers/Patient/Patient"
import SearchPatient from "./containers/SearchPatient/SearchPatient"
import AppNav from "./components/AppNav/AppNav";
import DoctorLogIn from "./containers/DoctorLogIn/DoctorLogIn";
import "./App.css";


function App() {
  return (
    <div>
      <BrowserRouter>
        <AppNav />
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/patient" component={PatientLogIn} />
          <Route exact path="/patient-card" component={PatientCard} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/doctor" component={DoctorLogIn} />
          <Route exact path="/doctor-consult" component={DoctorConsult} />
          <Route exact path="/search-patient" component={SearchPatient} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
