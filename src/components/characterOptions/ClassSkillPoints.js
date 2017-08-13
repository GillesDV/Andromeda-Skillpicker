import React, { Component } from 'react'

export default class ClassSkillPoints extends Component{
  render(){
    return (
      <div>
        Skill points: {this.props.skillPoints}
      </div>
    );
  }
}
