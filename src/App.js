import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppNav from "./components/AppNav/AppNav";
import Footer from "./components/Footer/Footer";
import MainContainer from "./containers/MainContainer/MainContainer";
import Patient from "./containers/Patient/Patient";
import AboutUs from "./containers/AboutUs/AboutUs";
import Contact from "./containers/Contact/Contact";
import Doctor from "./containers/Doctor/Doctor";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppNav />
        <Switch>
          <Route exac path="/:id" component={MainContainer} />
          <Route exac path="/patient" component={Patient} />
          <Route exac path="/contact" component={Contact} />
          <Route exac path="/about-us" component={AboutUs} />
          <Route exac path="/doctor" component={Doctor} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
