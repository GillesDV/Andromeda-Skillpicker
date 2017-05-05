import {roundUp} from "./../MathHelper"

export default class OverloadSkill{
  constructor(){
    this.dataObject = {
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
    this.dataObject.RechargeTimeInSeconds *= 0.9;
  }
  Step2Unapply = () => {
    this.dataObject.RechargeTimeInSeconds = Math.ceil(this.dataObject.RechargeTimeInSeconds * 1.1);
  }

  Step3Apply = () => {
    this.dataObject.InitialDamageUncharged *= 1.15;
    this.dataObject.InitialDamageCharged *= 1.15;
    this.dataObject.ChainDamage *= 1.15;
  }
  Step3Unapply = () => {
    this.dataObject.InitialDamageUncharged = roundUp((this.dataObject.InitialDamageUncharged * 0.85), 2);
    this.dataObject.InitialDamageCharged = roundUp((this.dataObject.InitialDamageCharged * 0.85), 2);
    this.dataObject.ChainDamage = roundUp((this.dataObject.ChainDamage * 0.85), 2);
  }

  Step4aApply = () => {
    this.dataObject.InitialDamageUncharged *= 1.25;
    this.dataObject.InitialDamageCharged *= 1.25;
    this.dataObject.ChainDamage *= 1.25;
  }
  Step4aUnapply = () => {
    this.dataObject.InitialDamageUncharged = roundUp((this.dataObject.InitialDamageUncharged * 0.75), 2);
    this.dataObject.InitialDamageCharged = roundUp((this.dataObject.InitialDamageCharged * 0.75), 2);
    this.dataObject.ChainDamage = roundUp((this.dataObject.ChainDamage * 0.75), 2);
  }

  Step4bApply = () => {
    this.dataObject.RechargeTimeInSeconds *= 0.8;
  }
  Step4bUnapply = () => {
    this.dataObject.RechargeTimeInSeconds = roundUp((this.dataObject.RechargeTimeInSeconds * 1.2), 2);
  }

  Step5aApply = () => {
    this.dataObject.AmountOfTargetsChainedWhenCharged += 1;
  }
  Step5aUnapply = () => {
    this.dataObject.AmountOfTargetsChainedWhenCharged -= 1;
  }

  Step5bApply = () => {
    this.dataObject.ShieldDamageBonusInPercent += 50;
  }
  Step5bUnapply = () => {
    this.dataObject.ShieldDamageBonusInPercent -= 50;
  }

  Step6aApply = () => {
    this.dataObject.AmountOfTargetsChainedWhenCharged += 1;
    this.dataObject.ChainDamage *= 1.3;
  }
  Step6aUnapply = () => {
    this.dataObject.AmountOfTargetsChainedWhenCharged -= 1;
    this.dataObject.ChainDamage = roundUp((this.dataObject.ChainDamage * 0.7), 2);
  }

  Step6bApply = () => {
    this.dataObject.ShieldDamageBonusInPercent += 50;
    this.dataObject.SyntheticDamageBonusInPercent += 50;
  }
  Step6bUnapply = () => {
    this.dataObject.ShieldDamageBonusInPercent -= 50;
    this.dataObject.SyntheticDamageBonusInPercent -= 50;
  }

}
