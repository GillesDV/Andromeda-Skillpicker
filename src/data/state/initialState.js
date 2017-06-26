let initialState = {
  selectedClassLevel: 1,
  SkillPointsTotal: 20,
  /*SkillPointsInUse: 0*/
  firstSkill: {
    title: 'Overload',
    description: 'Tap Button: Unleashes an electrostatic discharge upon a target. High damage to shields and synthetic enemies. Detonates combo primers. Hold Button: Charges Overload, causing it to "chain" to two additional targets.',
    InitialDamageUncharged: 150,
    InitialDamageCharged: 200,
    ChainDamage: 100,
    AmountOfTargetsChainedWhenCharged: 2,
    ShieldDamageBonusInPercent: 200,
    SyntheticDamageBonusInPercent: 30,
    RechargeTimeInSeconds: 15
  }

};

/*let initialState = {
  contentOfSearchbar: '',
  selectedClassLevel: 1,
  SelectedCharacterId: 0,
  ListOfCharacters: {},
  DecisionTreeForSkill1: "000000",
  DecisionTreeForSkill2: "111222",
  DecisionTreeForSkill3: "111333",
  SelectedWeaponId: 0,
  SelectedWeaponLevel: 1,
  SelectedBoosterId: 0
};*/

export default initialState;

//als alternatief op 000000 -> een array v waarden [1, 2, 3, 4A, 5B, 0], in JSON steken en zo in url steken
