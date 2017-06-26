import {connect} from 'react-redux';
import {setClassLevel} from './../../actions/Actions';
import ClassLevelPresentational from './ClassLevelPresentational'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.selectedLevel === state.selectedClassLevel
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setClassLevel(ownProps.selectedLevel, ownProps.amountOfPoints))
    }
  }
}

const ClassLevelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassLevelPresentational)

export default ClassLevelContainer;
