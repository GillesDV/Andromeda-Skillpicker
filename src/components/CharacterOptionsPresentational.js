import React, {Component} from 'react'

import ClassLevelHeader from './characterOptions/ClassLevelHeader';
import ClassSkillPoints from './characterOptions/ClassSkillPoints';

const CharacterOptionsPresentational = ({firstSkill}) => {
  return (
    <div>
      <ClassLevelHeader />
      <ClassSkillPoints />
      <SkillTreeComponent skillData={firstSkill} />

    </div>
  )
}

export default CharacterOptionsPresentational;


class SkillTreeComponent extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.skillData.title} </h2>

        <table>
          <tbody>
          <tr>
            <td rowSpan="2" className="SkillTreeSlotInactive"> first </td>
            <td rowSpan="2" className="SkillTreeSlotInactive"> second </td>
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
