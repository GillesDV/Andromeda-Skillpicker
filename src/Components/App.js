import React, { Component } from 'react';
import './App.css';
import ClassList from "./ClassListComponent"

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      classList: {
        Adept: {
          HumanMaleAdept: {
            Name: "Human Male Adept",
            Rarity: "Common"
          },
          HumanFemaleAdept: {
            Name: "Human Female Adept",
            Rarity: "Common"
          },
          AsariAdept: {
            Name: "Asari Adept",
            Rarity: "Uncommon"
          }
        },
        Engineer: {
          HumanMaleEngineer: {
            Name: "Human Male Engineer",
            Rarity: "Common"
          },
          HumanFemaleEngineer: {
            Name: "Human Female Engineer",
            Rarity: "Common"
          },
          KroganEngineer: {
            Name: "Krogan Engineer",
            Rarity: "Uncommon"
          }
        },
        Infiltrator: {
          HumanMaleInfiltrator: {
            Name: "Human Male Infiltrator",
            Rarity: "Common"
          },
          HumanMaleInfiltrator: {
            Name: "Human Male Infiltrator",
            Rarity: "Common"
          },
          SalarianInfiltrator: {
            Name: "Salarian Infiltrator",
            Rarity: "Uncommon"
          }
        },
        Soldier: {
          HumanMaleSoldier: {
            Name: "Human Male Soldier",
            Rarity: "Common"
          },
          HumanFemaleSoldier: {
            Name: "Human Female Soldier",
            Rarity: "Common"
          },
          TurianSoldier: {
            Name: "Turian Soldier",
            Rarity: "Uncommon"
          }
        },
        Sentinel: {
          HumanMaleSentinel: {
            Name: "Human Male Sentinel",
            Rarity: "Common"
          },
          HumanFemaleSentinel: {
            Name: "Human Female Sentinel",
            Rarity: "Common"
          },
          AsariSentinel: {
            Name: "Asari Sentinel",
            Rarity: "Uncommon"
          }
        },
        Vanguard: {
          HumanMaleVanguard: {
            Name: "Human Male Vanguard",
            Rarity: "Common"
          },
          HumanFemaleVanguard: {
            Name: "Human Female Vanguard",
            Rarity: "Common"
          },
          KroganVanguard: {
            Name: "Krogan Vanguard",
            Rarity: "Uncommon"
          }
        },
        Others: {
          KroganMercenary: {
            Name: "Krogan Mercenary",
            Rarity: "Rare"
          },
          TurianHavocTrooper: {
            Name: "Turian Havoc Trooper",
            Rarity: "Rare"
          },
          AsariHuntress: {
            Name: "Asari Huntress",
            Rarity: "Rare"
          },
          AngaraInsurgent: {
            Name: "Angara Insurgent",
            Rarity: "Rare"
          },
          AsariDuelist: {
            Name: "Asari Duelist",
            Rarity: "Ultra-Rare"
          },
          AngaraDuelist: {
            Name: "Angara Duelist",
            Rarity: "Ultra-Rare"
          },
          SalarianOperator: {
            Name: "Salarian Operator",
            Rarity: "Ultra-Rare"
          },
          HumanKineticist: {
            Name: "Human Kineticist",
            Rarity: "Ultra-Rare"
          }
        }

      }
    }
  }
  render() {
    return (
      <div className="App">
        <ClassList classList={this.state.classList} className="App" />
      </div>
    );
  }
}
