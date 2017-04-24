import React, { Component } from 'react';
import './App.css';
import ClassList from './ClassListComponent'
import {dataStore} from './../data/dataStore.js'
import {overloadSkillObject} from "./SkillTreeComponent"

export default class App extends Component {
  constructor(){
    super();
    this.state = dataStore;
    this.firstSkill = overloadSkillObject;
  }
  
  render() {
    return (
      <div className="App">
        <ClassList classList={this.state.classList} className="App" />
      </div>
    );
  }
}
