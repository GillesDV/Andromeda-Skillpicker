const allReducers = (state, action) => {
  switch (action.type) {
    case 'SET_CLASS_LEVEL':
      return {...state, selectedClassLevel: action.classNumber, SkillPointsTotal: action.skillPoints}
    case 'DO_OVERLOAD_STEP_2':
      return {...state, firstSkill: {...state.firstSkill, RechargeTimeInSeconds: 13.5 }}
    default:
      return state
  }
}

export default allReducers
