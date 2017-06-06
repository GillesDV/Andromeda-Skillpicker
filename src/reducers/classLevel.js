const selectedClassLevel = (state = 1, action) => {
  switch (action.type) {
    case 'SET_CLASS_LEVEL':
      return action.classNumber
    default:
      return state
  }
}

export default selectedClassLevel
