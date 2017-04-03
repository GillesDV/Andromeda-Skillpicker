import React, { Component } from 'react';
import './App.css';
import ClassList from "./ClassListComponent"

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      classList: {
        Soldier: {
          HumanMaleSoldier: {
            Name: "Human Male Soldier"
          },
          HumanFemaleSoldier: {
            Name: "Human Female Soldier"
          }
        },
        Engineer: {
          HumanMaleEngineer: {
            Name: "Human Male Engineer"
          }
        }

      }
    }
  }
  render() {
    return (
      <div className="App">
        <ClassList classList={this.state.classList} />
      </div>
    );
  }
}
