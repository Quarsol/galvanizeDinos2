import React from "react"


class SkillList extends React.Component {
  render() {
    return(
      <section className={this.props.toggleClass()} key={this.props.name}>
        <h4>Skills</h4>
        <ul className="skills-list" key={this.props.name}>
            {this.props.skills.map(skill => <li key={this.props.index}>{skill}</li>)}
        </ul>
      </section>
    )

  }
}

export default SkillList
