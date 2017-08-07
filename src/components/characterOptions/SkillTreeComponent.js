// import React, { Component } from 'react';
// import './../css/App.css';

// export default class SkillTreeComponent extends Component {
//   constructor(props){
//     super();

//     //delete this line when using redux
//     this.state = {skillData: props.skillData };
//   }

//   render() {
//     return (
//       <div>
//         <a>{this.state.skillData.dataObject.InitialDamageUncharged} </a>
//          -
//         <a>{this.state.skillData.dataObject.InitialDamageCharged} </a>
//          -
//         <a>{this.state.skillData.dataObject.ChainDamage} </a>
//          -
//         <a>{this.state.skillData.dataObject.AmountOfTargetsChainedWhenCharged} </a>
//          -
//         <a>{this.state.skillData.dataObject.ShieldDamageBonusInPercent} </a>
//          -
//         <a>{this.state.skillData.dataObject.SyntheticDamageBonusInPercent} </a>
//          -
//         <a>{this.state.skillData.dataObject.RechargeTimeInSeconds} </a>

//         <br/> <br/>

//         <div>
//           <div className="SkillTreeSlotActive"> first </div>
//           this is god ugly code. Use Redux!
//           <div className="SkillTreeSlotInactive" onClick={() =>
//             {this.state.skillData.Step2Apply();
//               this.setState({skillData: this.state.skillData});
//             } }> second </div>
//           <div className="SkillTreeSlotInactive"> third </div>
//           <div className="SkillTreeSlotInactive"> four A </div>
//           <div className="SkillTreeSlotInactive"> four B </div>
//           <div className="SkillTreeSlotInactive"> five A </div>
//           <div className="SkillTreeSlotInactive"> five B </div>
//           <div className="SkillTreeSlotInactive"> six A </div>
//           <div className="SkillTreeSlotInactive"> six B </div>
//         </div>
//       </div>
//     );
//   }
// }
