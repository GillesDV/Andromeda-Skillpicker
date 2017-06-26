const SkillPointsTotal = (state = 25, action) => {
  switch (action.type) {
    case 'SET_SKILLPOINTS_TOTAL':
      return action.skillPointsTotal
    default:
      return state
  }
}

export default SkillPointsTotal
