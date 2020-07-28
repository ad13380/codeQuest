import React from "react";
import "../App.css";
import Header from './Header'
import Play from './Play'
import Instructions from './Instructions'
import AboutUs from './AboutUs'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './Home'
// import Canvas from "./Canvas"

function App(props) {
  return (
    <div>
      <Header />
      <Router>
        <Route path='/' exact component={Home} />
        <Route path="/play" render={() => (
          <Play {...props} />
        )} />
        <Route path="/instructions" exact component={Instructions} />
        <Route path="/aboutus" exact component={AboutUs} />
      </Router>
    </div>
  );
}

export default App;
