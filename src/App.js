import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// nav needs to transition out a little
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
