import {connect} from 'react-redux';
import CharacterOptionsPresentational from './CharacterOptionsPresentational';

const mapStateToProps = (state, ownProps) => {
  
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
