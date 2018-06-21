import React from "react"
import SkillList from "./SkillList"


class Profiles extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      toggle: true
    }
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  toggleClass = () => {
    if (this.state.toggle) {
      return "skills-container hidden"
    } else {
      return "skills-container"
    }
  }

  render() {
    return(
      <section id="profiles-container">
          <h2>Profiles</h2>
          <ul id="profiles">{this.props.dinos.map(dino => {
            return(
              <li>
              <div className="profile-card" key={dino.name}>
              <header className="profile-header" key={dino.name}>
                <img src={dino.image} alt="dinoProfile" />
                <h2 onClick={this.toggle}>{dino.name}</h2>
              </header>
              <SkillList skills={dino.skills} toggleClass={this.toggleClass}/>
            </div>
          </li>
            )
          })}</ul>
      </section>
    )
  }
}

export default Profiles
