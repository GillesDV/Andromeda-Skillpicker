import React, { Component } from 'react';
import './App.css';
import ClassList from "./ClassListComponent"
import {dataStore} from "./../data/dataStore.js"

export default class App extends Component {
  constructor(){
    super();
    this.state = dataStore;

  }
  render() {
    return (
      <div className="App">
        <ClassList classList={this.state.classList} className="App" />
      </div>
    );
  }
}
