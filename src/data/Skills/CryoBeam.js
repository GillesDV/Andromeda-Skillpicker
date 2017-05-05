import {roundUp} from "./../MathHelper"

export default class CryoBeamSkill{
  constructor(){
    this.dataObject = {
      description: 'Hold button: Directs a continuous stream of super-cooled particles that freezes targets, priming them for combo detonations. Freezing disables unarmored enemies and weakens enemy armor, but has no effect on shielded foes.',
      DamagePerSecond: 135,
      DefenseDebuffVsArmorInPercent: 50,
      Radius: 0.5,
      extraEffect: "",
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
    this.dataObject.DamagePerSecond *= 1.2;
  }
  Step3Unapply = () => {
    this.dataObject.DamagePerSecond = roundUp((this.dataObject.DamagePerSecond * 0.8), 2);
  }

  Step4aApply = () => {
    this.dataObject.DamagePerSecond *= 1.25;
  }
  Step4aUnapply = () => {
    this.dataObject.DamagePerSecond = roundUp((this.dataObject.DamagePerSecond * 0.75), 2);
  }

  Step4bApply = () => {
    this.dataObject.RechargeTimeInSeconds *= 0.75;
  }
  Step4bUnapply = () => {
    this.dataObject.RechargeTimeInSeconds = roundUp((this.dataObject.RechargeTimeInSeconds * 1.25), 2);
  }

  Step5aApply = () => {
    this.dataObject.DefenseDebuffVsArmorInPercent += 50;
  }
  Step5aUnapply = () => {
    this.dataObject.DefenseDebuffVsArmorInPercent -= 50;
  }

  Step5bApply = () => {
    this.dataObject.Radius = 2;
  }
  Step5bUnapply = () => {
    this.dataObject.Radius = 0.5;
  }

  Step6aApply = () => {
    //TODO: +50% Frozen Shatter Damage ~ +50% Frozen Shatter Force ~ +150% Frozen Shatter Radius
  }
  Step6aUnapply = () => {
    //TODO: http://masseffect.wikia.com/wiki/Cryo_Beam
  }

  Step6bApply = () => {
    this.dataObject.extraEffect += "When aimed away from a direct target, the beam creates a temporary freezing zone that chills enemies who enter.";
  }
  Step6bUnapply = () => {
    this.dataObject.extraEffect -= "";
  }

}
