import React from "react";
import "../App.css";
import Header from './Header'
import Play from './Play'
import { BrowserRouter as Router, Route } from "react-router-dom"
// import Canvas from "./Canvas"

function App() {
  return (
    <Router>
      <Header />
      <Route path="/play" exact component={Play} />
    </Router>
  );
}

export default App;
