import React from "react";
import "../App.css";
import Header from './Header'
import Play from './Play'
import Instructions from './Instructions'
import AboutUs from './AboutUs'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './Home'
import cave1 from '../public/assets/cave1.jpg';
// import Canvas from "./Canvas"

function App() {
  return (
    <div styles={{backgroundImage:`url(${cave1})`}}>

      <Header />
      <Router>
        <Route path='/' exact component={Home} />
        <Route path="/play" exact component={Play} />
        <Route path="/instructions" exact component={Instructions} />
        <Route path="/aboutus" exact component={AboutUs} />
      </Router>
    </div>
  );
}

export default App;
