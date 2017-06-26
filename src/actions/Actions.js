
export const setClassLevel = (classNumber, skillPoints) => ({
  type: 'SET_CLASS_LEVEL',
  classNumber,
  skillPoints
});

export const setSkillPointsTotal = (skillPointsTotal) => ({
  type: 'SET_SKILLPOINTS_TOTAL',
  skillPointsTotal
});

/*
export const setSkillPointsInUse = (skillPointsInUse) => ({
  type: 'SET_SKILLPOINTS_IN_USE',
  skillPointsInUse
});
*/
