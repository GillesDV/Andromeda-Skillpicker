import React, { Component } from 'react';
import './App.css';

export default class SkillTreeComponent extends Component {
  constructor(props){
    super();

    //delete this line when using redux
    this.state = {skillData: props.skillData };
  }

  render() {
    return (
      <div>
        <a>{this.state.skillData.overloadSkillObject.InitialDamageUncharged} </a>
         -
        <a>{this.state.skillData.overloadSkillObject.InitialDamageCharged} </a>
         -
        <a>{this.state.skillData.overloadSkillObject.ChainDamage} </a>
         -
        <a>{this.state.skillData.overloadSkillObject.AmountOfTargetsChainedWhenCharged} </a>
         -
        <a>{this.state.skillData.overloadSkillObject.ShieldDamageBonusInPercent} </a>
         -
        <a>{this.state.skillData.overloadSkillObject.SyntheticDamageBonusInPercent} </a>
         -
        <a>{this.state.skillData.overloadSkillObject.RechargeTimeInSeconds} </a>

        <br/> <br/>

        <div>
          <div className="SkillTreeSlotActive"> first </div>
          this is god ugly code. Use Redux!
          <div className="SkillTreeSlotInactive" onClick={() =>
            {this.state.skillData.Step2Apply();
              this.setState({skillData: this.state.skillData});
            } }> second </div>
          <div className="SkillTreeSlotInactive"> third </div>
          <div className="SkillTreeSlotInactive"> four A </div>
          <div className="SkillTreeSlotInactive"> four B </div>
          <div className="SkillTreeSlotInactive"> five A </div>
          <div className="SkillTreeSlotInactive"> five B </div>
          <div className="SkillTreeSlotInactive"> six A </div>
          <div className="SkillTreeSlotInactive"> six B </div>
        </div>
      </div>
    );
  }
}
