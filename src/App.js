import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalstyles";
import PlanSection from "./components/PlanSection";
import InfoSection from "./components/InfoSection";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Service from "./pages/Service";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route exact path="/">
          <Hero slides={SliderData} />
          <PlanSection />
          <InfoSection />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/portfolios">
          <Portfolio/>
        </Route>
        <Route path="/service">
          <Service/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
