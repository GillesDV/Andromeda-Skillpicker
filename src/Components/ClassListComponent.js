import React, { Component } from 'react';
import './App.css';
import ListItem from "./ClassListItemComponent"

export default class ClassListComponent extends Component {
  render() {
    var types = [];

    for(var selectedType in this.props.classList){
      types.push(<p className="typeCharacterLighterColor" key={selectedType}> {selectedType} </p>);
      for(var person in this.props.classList[selectedType]){
        types.push( <ListItem completeClass={this.props.classList[selectedType][person].Name}
                              key={this.props.classList[selectedType][person].Name}/> );
      }
    }

    return (
      <div className="App">
        <h1>Class List </h1>

        <div>{types}</div>
      </div>
    );
  }
}
