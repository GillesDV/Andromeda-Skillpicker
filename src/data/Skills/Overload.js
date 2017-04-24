import {roundUp} from "./../MathHelper"

export default class OverloadSkill{
  constructor(){
    this.overloadSkillObject = {
      description: 'Tap Button: Unleashes an electrostatic discharge upon a target. High damage to shields and synthetic enemies. Detonates combo primers. Hold Button: Charges Overload, causing it to \"chain\" to two additional targets.',
      InitialDamageUncharged: 150,
      InitialDamageCharged: 200,
      ChainDamage: 100,
      AmountOfTargetsChainedWhenCharged: 2,
      ShieldDamageBonusInPercent: 200,
      SyntheticDamageBonusInPercent: 30,
      RechargeTimeInSeconds: 15
    }
  }

  Step2Apply = () => {
    this.overloadSkillObject.RechargeTimeInSeconds *= 0.9;
  }
  Step2Unapply = () => {
    this.overloadSkillObject.RechargeTimeInSeconds = Math.ceil(this.overloadSkillObject.RechargeTimeInSeconds * 1.1);
  }

  Step3Apply = () => {
    this.overloadSkillObject.InitialDamageUncharged *= 1.15;
    this.overloadSkillObject.InitialDamageCharged *= 1.15;
    this.overloadSkillObject.ChainDamage *= 1.15;
  }
  Step3Unapply = () => {
    this.overloadSkillObject.InitialDamageUncharged = roundUp((this.overloadSkillObject.InitialDamageUncharged * 0.85), 2);
    this.overloadSkillObject.InitialDamageCharged = roundUp((this.overloadSkillObject.InitialDamageCharged * 0.85), 2);
    this.overloadSkillObject.ChainDamage = roundUp((this.overloadSkillObject.ChainDamage * 0.85), 2);
  }

  Step4aApply = () => {
    this.overloadSkillObject.InitialDamageUncharged *= 1.25;
    this.overloadSkillObject.InitialDamageCharged *= 1.25;
    this.overloadSkillObject.ChainDamage *= 1.25;
  }
  Step4aUnapply = () => {
    this.overloadSkillObject.InitialDamageUncharged = roundUp((this.overloadSkillObject.InitialDamageUncharged * 0.75), 2);
    this.overloadSkillObject.InitialDamageCharged = roundUp((this.overloadSkillObject.InitialDamageCharged * 0.75), 2);
    this.overloadSkillObject.ChainDamage = roundUp((this.overloadSkillObject.ChainDamage * 0.75), 2);
  }

  Step4bApply = () => {
    this.overloadSkillObject.RechargeTimeInSeconds *= 0.8;
  }
  Step4bUnapply = () => {
    this.overloadSkillObject.RechargeTimeInSeconds = roundUp((this.overloadSkillObject.RechargeTimeInSeconds * 1.2), 2);
  }

  Step5aApply = () => {
    this.overloadSkillObject.AmountOfTargetsChainedWhenCharged += 1;
  }
  Step5aUnapply = () => {
    this.overloadSkillObject.AmountOfTargetsChainedWhenCharged -= 1;
  }

  Step5bApply = () => {
    this.overloadSkillObject.ShieldDamageBonusInPercent += 50;
  }
  Step5bUnapply = () => {
    this.overloadSkillObject.ShieldDamageBonusInPercent -= 50;
  }

  Step6aApply = () => {
    this.overloadSkillObject.AmountOfTargetsChainedWhenCharged += 1;
    this.overloadSkillObject.ChainDamage *= 1.3;
  }
  Step6aUnapply = () => {
    this.overloadSkillObject.AmountOfTargetsChainedWhenCharged -= 1;
    this.overloadSkillObject.ChainDamage = roundUp((this.overloadSkillObject.ChainDamage * 0.7), 2);
  }

  Step6bApply = () => {
    this.overloadSkillObject.ShieldDamageBonusInPercent += 50;
    this.overloadSkillObject.SyntheticDamageBonusInPercent += 50;
  }
  Step6bUnapply = () => {
    this.overloadSkillObject.ShieldDamageBonusInPercent -= 50;
    this.overloadSkillObject.SyntheticDamageBonusInPercent -= 50;
  }

}
