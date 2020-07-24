import React from "react";
import "../App.css";
import Header from './Header'
import Play from './Play'
import Instructions from './Instructions'
import AboutUs from './AboutUs'
import { BrowserRouter as Router, Route } from "react-router-dom"
// import Canvas from "./Canvas"

function App() {
  return (
    <Router>
      <Header />
      <Route path="/play" exact component={Play} />
      <Route path="/instructions" exact component={Instructions} />
      <Route path="/aboutus" exact component={AboutUs} />
    </Router>
  );
}

export default App;
