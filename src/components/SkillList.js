import React from "react"


class SkillList extends React.Component {
  render() {
    console.log("props", this.props);
    return(
      <section className={this.props.toggleClass()} key={this.props.name}>
        <h4>Skills</h4>
        <ul className="skills-list" key={this.props.name}>

            {this.props.skills.map(skill => <li>{skill}</li>)}

        </ul>
      </section>
    )

  }
}

export default SkillList
