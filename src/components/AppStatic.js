import './../css/App.css';
import React, { Component } from 'react';
import logo from './../images/andromeda_initiative.png';
import initialState from './../data/state/initialState.js';

var state = initialState;

export default class App extends Component {
  constructor(){
    super();
    this.firstSkill = new OverloadSkill();
  }
  render() {
    console.log(state);

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <ClassListComponent classList={characterList} />
              </td>
              <td>
                <ClassLevel />
                <ClassSkillPoints amountOfSkillPoints={20}/>
                <SkillTreeComponent skillData={this.firstSkill} />
              </td>
              <td>
                <HealthAndShields Health={250} Shields={300} />
                <OverloadStats skillData={this.firstSkill} />
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

class OverloadSkill{
  constructor(){
    this.dataObject = {
      title: 'Overload',
      description: 'Tap Button: Unleashes an electrostatic discharge upon a target. High damage to shields and synthetic enemies. Detonates combo primers. Hold Button: Charges Overload, causing it to "chain" to two additional targets.',
      InitialDamageUncharged: 150,
      InitialDamageCharged: 200,
      ChainDamage: 100,
      AmountOfTargetsChainedWhenCharged: 2,
      ShieldDamageBonusInPercent: 200,
      SyntheticDamageBonusInPercent: 30,
      RechargeTimeInSeconds: 15
    }
  }
}

class SkillTreeComponent extends Component {
  constructor(props){
    super();
  }

  render() {
    return (
      <div>
        <h2>{this.props.skillData.dataObject.title} </h2>

        <table>
          <tbody>
          <tr>
            <td rowSpan="2" className="SkillTreeSlotInactive"> first </td>
            <td rowSpan="2" className="SkillTreeSlotInactive"> second </td>
            <td rowSpan="2" className="SkillTreeSlotInactive"> third </td>
            <td className="SkillTreeSlotInactive"> four A </td>
            <td className="SkillTreeSlotInactive"> four B </td>
            <td className="SkillTreeSlotInactive"> Five A </td>
          </tr>
          <tr>
            <td className="SkillTreeSlotInactive"> Five B </td>
            <td className="SkillTreeSlotInactive"> Six A </td>
            <td className="SkillTreeSlotInactive"> Six B </td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

class OverloadStats extends Component {
  render(){
    return (
      <div>
        <h2>{this.props.skillData.dataObject.title} </h2>

        <a>Initial Damage (uncharged): {this.props.skillData.dataObject.InitialDamageUncharged} </a>
        <br/>
        <a> Initial Damage (charged): {this.props.skillData.dataObject.InitialDamageCharged} </a>
        <br/>
        <a> Chain damage: {this.props.skillData.dataObject.ChainDamage} </a>
        <br/>
        <a> Amount of targets chained, when charged: {this.props.skillData.dataObject.AmountOfTargetsChainedWhenCharged} </a>
        <br/>
        <a> Damage bonus vs Shields: {this.props.skillData.dataObject.ShieldDamageBonusInPercent} %</a>
        <br/>
        <a> Damage bonus vs Synthetics: {this.props.skillData.dataObject.SyntheticDamageBonusInPercent} %</a>
        <br/>
        <a> Recharge time: {this.props.skillData.dataObject.RechargeTimeInSeconds} seconds </a>
      </div>
    );
  }
}

class ClassLevel extends Component{
  render(){
    return (
      <div>
        Class Level:
        <a> I - </a>
        <a>II - </a>
        <a>III - </a>
        <a>IV - </a>
        <a>V - </a>
        <a>VI - </a>
        <a>VII - </a>
        <a>VIII - </a>
        <a>IX - </a>
        <a>X</a>
      </div>
    );
  }
}

class ClassSkillPoints extends Component{
  render(){
    return(
      <div>
        Skill points: {this.props.amountOfSkillPoints}
      </div>
    );
  }
}

class HealthAndShields extends Component{
  render(){
    return (
      <h3>
        Health: {this.props.Health}
        -
        Shields: {this.props.Shields}
      </h3>
    );
  }
}

class SearchBar extends Component{
  render(){
    return(
      <div>
        <input type="text" />
      </div>
    );
  }
}


class ClassListComponent extends Component {
  render() {
    var charactersAndClasses = [];
    var lastClass = null;
    for(var selectedCharacterIdentifier in this.props.classList){
      var selectedCharacterObject = this.props.classList[selectedCharacterIdentifier]
      if (selectedCharacterObject.Class !== lastClass){
        charactersAndClasses.push(<p key={selectedCharacterObject.Class}> {selectedCharacterObject.Class} </p>);
      }
      charactersAndClasses.push( <ClassListItemComponent nameOfClass={selectedCharacterObject.Name} key={selectedCharacterObject.Name}/> );
      lastClass = selectedCharacterObject.Class;
    }


    return (
      <div className="App">
        <h1>Class List </h1>
        <SearchBar />
        <div>{charactersAndClasses}</div>
      </div>
    );
  }
}

class ClassListItemComponent extends Component {
  render() {
    return (
      <div className="App" key>
        <img src={logo} alt="avatar" width="40" height="40"/>
        <a className="App-intro vert-align">
          {this.props.nameOfClass}
        </a>
      </div>
    );
  }
}

let characterList = {
    HumanMaleAdept: {
      Id: 1,
      Name: "Human Male Adept",
      Rarity: "Common",
      Health: "500",
      Shields: "250",
      Class: "Adept"
    },
    HumanFemaleAdept: {
      Id: 2,
      Name: "Human Female Adept",
      Rarity: "Common",
      Health: "500",
      Shields: "250",
      Class: "Adept"
    },
    AsariAdept: {
      Id: 3,
      Name: "Asari Adept",
      Rarity: "Uncommon",
      Health: "475",
      Shields: "250",
      Class: "Adept"
    }
}
