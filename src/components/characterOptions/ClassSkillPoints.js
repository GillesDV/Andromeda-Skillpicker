import React, { Component } from 'react'

export default class ClassLevelHeader extends Component{
  render(){
    return (
      <div>
        Skill points: {this.props.amountOfSkillPoints}
      </div>
    );
  }
}
