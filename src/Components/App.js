import './App.css';
import React, { Component } from 'react';
import ClassList from './ClassListComponent'
import SkillTree from "./SkillTreeComponent"
import {dataStore} from './../data/CharacterList'
import overLoadSkillData from './../data/Skills/OverloadSkill'


export default class App extends Component {
  constructor(){
    super();
    this.state = dataStore;
    this.firstSkill = new overLoadSkillData();
  }
  render() {
    //debugger;
    return (
      <div>
        {/*<ClassList classList={this.state.classList} className="App" />*/}

        <SkillTree skillData={this.firstSkill} />
      </div>
    );
  }
}
