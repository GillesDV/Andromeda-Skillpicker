import {roundUp} from "./MathHelper"

export default class OverloadSkill{
  overloadSkillObject: {
    description: 'Tap Button: Unleashes an electrostatic discharge upon a target. High damage to shields and synthetic enemies. Detonates combo primers. Hold Button: Charges Overload, causing it to \"chain\" to two additional targets.',
    InitialDamageUncharged: 150,
    InitialDamageCharged: 200,
    ChainDamage: 100,
    AmountOfTargetsChainedWhenCharged: 2,
    ShieldDamageBonusInPercent: 200,
    SyntheticDamageBonusInPercent: 30,
    RechargeTimeInSeconds: 15
  }

  OverloadStep2Apply = function() {
    this.overloadSkillObject.RechargeTimeInSeconds *= 0.9;
  }
  OverloadStep2Unapply = function() {
    this.overloadSkillObject.RechargeTimeInSeconds = Math.ceil(this.overloadSkillObject.RechargeTimeInSeconds * 1.1);
  }

  OverloadStep3Apply = function() {
    this.overloadSkillObject.InitialDamageUncharged *= 1.15;
    this.overloadSkillObject.InitialDamageCharged *= 1.15;
    this.overloadSkillObject.ChainDamage *= 1.15;
  }
  OverloadStep3Unapply = function() {
    this.overloadSkillObject.InitialDamageUncharged = roundUp((this.overloadSkillObject.InitialDamageUncharged * 0.85), 2);
    this.overloadSkillObject.InitialDamageCharged = roundUp((this.overloadSkillObject.InitialDamageCharged * 0.85), 2);
    this.overloadSkillObject.ChainDamage = roundUp((this.overloadSkillObject.ChainDamage * 0.85), 2);
  }

  OverloadStep4aApply = function() {
    this.overloadSkillObject.InitialDamageUncharged *= 1.25;
    this.overloadSkillObject.InitialDamageCharged *= 1.25;
    this.overloadSkillObject.ChainDamage *= 1.25;
  }
  OverloadStep4aUnapply = function() {
    this.overloadSkillObject.InitialDamageUncharged = roundUp((this.overloadSkillObject.InitialDamageUncharged * 0.75), 2);
    this.overloadSkillObject.InitialDamageCharged = roundUp((this.overloadSkillObject.InitialDamageCharged * 0.75), 2);
    this.overloadSkillObject.ChainDamage = roundUp((this.overloadSkillObject.ChainDamage * 0.75), 2);
  }
  OverloadStep4bApply = function() {
    this.overloadSkillObject.RechargeTimeInSeconds *= 0.8;
  }

  OverloadStep4bUnapply = function() {
    this.overloadSkillObject.RechargeTimeInSeconds = roundUp((this.overloadSkillObject.RechargeTimeInSeconds * 1.2), 2);
  }
  OverloadStep5aApply = function() {
    this.overloadSkillObject.AmountOfTargetsChainedWhenCharged += 1;
  }

  OverloadStep5aUnapply = function() {
    this.overloadSkillObject.AmountOfTargetsChainedWhenCharged -= 1;
  }

  OverloadStep5bApply = function() {
    this.overloadSkillObject.ShieldDamageBonusInPercent += 50;
  }

  OverloadStep5bUnapply = function() {
    this.overloadSkillObject.ShieldDamageBonusInPercent -= 50;
  }

  OverloadStep6aApply = function() {
    this.overloadSkillObject.AmountOfTargetsChainedWhenCharged += 1;
    this.overloadSkillObject.ChainDamage *= 1.3;
  }
  OverloadStep6aUnapply = function() {
    this.overloadSkillObject.AmountOfTargetsChainedWhenCharged -= 1;
    this.overloadSkillObject.ChainDamage = roundUp((this.overloadSkillObject.ChainDamage * 0.7), 2);
  }

  OverloadStep6bApply = function() {
    this.overloadSkillObject.ShieldDamageBonusInPercent += 50;
    this.overloadSkillObject.SyntheticDamageBonusInPercent += 50;
  }
  OverloadStep6bUnapply = function() {
    this.overloadSkillObject.ShieldDamageBonusInPercent -= 50;
    this.overloadSkillObject.SyntheticDamageBonusInPercent -= 50;
  }

}
