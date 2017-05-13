import React, { Component } from 'react';
import logo from './../images/andromeda_initiative.png';

export default class ClassListItemComponent extends Component {
  render() {
    return (
      <div className="App" key="">
        <img src={logo} alt="avatar" width="40" height="40"/>
        <a className="App-intro vert-align">
          {this.props.completeClass}
        </a>
      </div>
    );
  }
}
