import './../css/App.css';
import React, { Component } from 'react';
import ClassList from './ClassListComponent'
import SkillTree from "./SkillTreeComponent"
import {dataStore} from './../data/CharacterList'
import overLoadData from './../data/Skills/Overload'


export default class App extends Component {
  constructor(){
    super();
    this.state = dataStore;
    this.firstSkill = new overLoadData();
  }
  render() {
    //debugger;
    return (
      <div>
        <table>
          <tr>
            <td>
              {/*<ClassList classList={this.state.classList} className="App" />*/}
            </td>
            <td>
              <SkillTree skillData={this.firstSkill} />
            </td>
            <td>

            </td>
          </tr>
        </table>

      </div>
    );
  }
}
