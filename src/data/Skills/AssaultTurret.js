import {roundUp} from "./../MathHelper"

export default class AssaultTurretSkill{
  constructor(){
    this.dataObject = {
      description: 'Deploys an automated assault turret that counts as a tech construct. Tap Button: Directs the turret to attack a particular target. Hold Button: Detonates the turret, damaging nearby enemies.',
      TurretHealth: 400,
      DamagePerSecond: 20,
      DamageWhenDestroyed: 340,
      RechargeTimeInSeconds: 24
    }
  }

  Step2Apply = () => {
    this.dataObject.TurretHealth *= 1.3;
  }
  Step2Unapply = () => {
    this.dataObject.TurretHealth = Math.ceil(this.dataObject.RechargeTimeInSeconds * 0.7);
  }

  Step3Apply = () => {
    this.dataObject.DamagePerSecond *= 1.15;
  }
  Step3Unapply = () => {
    this.dataObject.DamagePerSecond = roundUp((this.dataObject.DamagePerSecond * 0.85), 2);
  }

  Step4aApply = () => {
    this.dataObject.TurretHealth *= 1.5;
  }
  Step4aUnapply = () => {
    this.dataObject.TurretHealth = roundUp((this.dataObject.TurretHealth * 0.5), 2);
  }

  Step4bApply = () => {
    this.dataObject.RechargeTimeInSeconds *= 0.6;
  }
  Step4bUnapply = () => {
    this.dataObject.RechargeTimeInSeconds = roundUp((this.dataObject.RechargeTimeInSeconds * 1.4), 2);
  }

  Step5aApply = () => {
    this.dataObject.DamagePerSecond *= 1.25;
  }
  Step5aUnapply = () => {
    this.dataObject.DamagePerSecond *= 0.75;
  }

  Step5bApply = () => {
    
  }
  Step5bUnapply = () => {

  }

  Step6aApply = () => {

  }
  Step6aUnapply = () => {

  }

  Step6bApply = () => {

  }
  Step6bUnapply = () => {

  }

}
