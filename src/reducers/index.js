const allReducers = (state, action) => {
  switch (action.type) {
    case 'SET_CLASS_LEVEL':
      return {...state, selectedClassLevel: action.classNumber, SkillPointsTotal: action.skillPoints}
    default:
      return state
  }
}

export default allReducers
