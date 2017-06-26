import {connect} from 'react-redux';
import CharacterOptionsPresentational from './CharacterOptionsPresentational';

const mapStateToProps = (state, ownProps) => {
  return {
    firstSkill: state.firstSkill,
    skillPoints: state.SkillPointsTotal
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const CharacterOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterOptionsPresentational)

export default CharacterOptionsContainer;
