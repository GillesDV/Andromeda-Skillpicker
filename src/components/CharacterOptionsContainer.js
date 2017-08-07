import {connect} from 'react-redux';
import CharacterOptionsPresentational from './CharacterOptionsPresentational';
import {doOverloadStep2} from './../actions/Actions';


const mapStateToProps = (state, ownProps) => {
  return {
    firstSkill: state.firstSkill,
    skillPoints: (state.SkillPointsTotal - state.SkillPointsInUse)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doOverloadStep2Func: () => {
      dispatch(doOverloadStep2())
    }
  }
}

const CharacterOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterOptionsPresentational)

export default CharacterOptionsContainer;
