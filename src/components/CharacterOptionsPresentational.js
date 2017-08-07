import React, {Component} from 'react'

import ClassLevelHeader from './characterOptions/ClassLevelHeader';
import ClassSkillPoints from './characterOptions/ClassSkillPoints';

const CharacterOptionsPresentational = ({firstSkill, skillPoints, doOverloadStep2Func}) => {
  return (
    <div>
      <ClassLevelHeader />
      <ClassSkillPoints skillPoints={skillPoints} />
      <SkillTreeComponent skillData={firstSkill} onClickDoOverloadStep2={doOverloadStep2Func.bind(this)} />

    </div>
  )
}

export default CharacterOptionsPresentational;


class SkillTreeComponent extends Component {


  render() {
    this.doOverloadStep2 = () => this.props.onClickDoOverloadStep2();
    
    return (
      <div>
        <h2>{this.props.skillData.title} </h2>

        <table>
          <tbody>
          <tr>
            <td rowSpan="2" className="SkillTreeSlotInactive"> first </td>
            <td rowSpan="2" className="SkillTreeSlotInactive" onClick={() =>
              this.doOverloadStep2()
            }> 
              second
            </td>
            <td rowSpan="2" className="SkillTreeSlotInactive"> third </td>
            <td className="SkillTreeSlotInactive"> {'4A'} </td>
            <td className="SkillTreeSlotInactive"> {'5A'} </td>
            <td className="SkillTreeSlotInactive"> {'6A'} </td>
          </tr>
          <tr>
            <td className="SkillTreeSlotInactive"> {'4B'} </td>
            <td className="SkillTreeSlotInactive"> {'5B'} </td>
            <td className="SkillTreeSlotInactive"> {'6B'} </td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}
