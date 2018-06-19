import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
// import Profiles from "./components/Profiles"
// import SkillList from "./components/SkillList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
