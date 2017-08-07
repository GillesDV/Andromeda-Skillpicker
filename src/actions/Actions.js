export const setClassLevel = (classNumber, skillPoints) => ({
  type: 'SET_CLASS_LEVEL',
  classNumber,
  skillPoints
});

export const doOverloadStep2 = () => ({
  type: 'DO_OVERLOAD_STEP_2'
})