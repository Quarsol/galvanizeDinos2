import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Profiles from "./components/Profiles"
// import SkillList from "./components/SkillList"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      dinos: []
    }
  }

  componentDidMount() {
    fetch("./dinosaurs.json")
    .then(response => response.json())
    .then(dinos => {
      this.setState({
        dinos: dinos
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Profiles dinos={this.state.dinos}/>
        {/* <SkillList dinos={this.state.dinos}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
