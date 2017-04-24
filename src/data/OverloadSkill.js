import {roundUp} from "./MathHelper"

class OverloadSkill{

  const overloadSkillObject = {
    description: "Tap Button: Unleashes an electrostatic discharge upon a target. High damage to shields and synthetic enemies. Detonates combo primers. "
                + "Hold Button: Charges Overload, causing it to \"chain\" to two additional targets."
    InitialDamageUncharged: 150,
    InitialDamageCharged: 200,
    ChainDamage: 100,
    AmountOfTargetsChainedWhenCharged: 2
    ShieldDamageBonusInPercent: 200,
    SyntheticDamageBonusInPercent: 30,
    RechargeTimeInSeconds: 15,

    // Allow a change to be made to props
    accept: function(visitor) {
      visitor.visit(this);
    }

    //how to use:
    // overloadSkill.accept(OverloadStep2Apply);
  }

  var OverloadSkillReader = {
    visit: function(skill){
      return [
        "Initial damage (uncharged): " + skill.InitialDamageUncharged,
        "Initial damage (charged): " + skill.InitialDamageCharged,
        "Chain damage: " + skill.ChainDamage,
        "Amount of targets that can be chained: " + skill.AmountOfTargetsChainedWhenCharged,
        "Shield damage bonus: " + skill.ShieldDamageBonusInPercent + "%",
        "Synthetic damage bonus: " + skill.SyntheticDamageBonusInPercent + "%",
        "Recharge time: " + skill.RechargeTimeInSeconds + " seconds"
      ];
    }
  }

  var OverloadStep2Apply = {
    visit: function(skill) {
      skill.RechargeTimeInSeconds *= 0.9;
    }
  }
  var OverloadStep2Unapply = {
    visit: function(skill) {
      skill.RechargeTimeInSeconds = Math.ceil(skill.RechargeTimeInSeconds * 1.1);
    }
  }

  var OverloadStep3Apply = {
    visit: function(skill) {
      skill.InitialDamageUncharged *= 1.15;
      skill.InitialDamageCharged *= 1.15;
      skill.ChainDamage *= 1.15;
    }
  }
  var OverloadStep3Unapply = {
    visit: function(skill) {
      skill.InitialDamageUncharged = roundUp((skill.InitialDamageUncharged * 0.85), 2);
      skill.InitialDamageCharged =  roundUp((skill.InitialDamageCharged * 0.85), 2);
      skill.ChainDamage =  roundUp((skill.ChainDamage * 0.85), 2);
    }
  }

  var OverloadStep4aApply = {
    visit: function(skill) {
      skill.InitialDamageUncharged *= 1.25;
      skill.InitialDamageCharged *= 1.25;
      skill.ChainDamage *= 1.25;
    }
  }
  var OverloadStep4aUnapply = {
    visit: function(skill) {
      skill.InitialDamageUncharged = roundUp((skill.InitialDamageUncharged * 0.75), 2);
      skill.InitialDamageCharged =  roundUp((skill.InitialDamageCharged * 0.75), 2);
      skill.ChainDamage =  roundUp((skill.ChainDamage * 0.75), 2);
    }
  }
  var OverloadStep4bApply = {
    visit: function(skill) {
      skill.RechargeTimeInSeconds *= 0.8;
    }
  }

  var OverloadStep4bUnapply = {
    visit: function(skill) {
      skill.RechargeTimeInSeconds = Math.ceil(skill.RechargeTimeInSeconds * 1.2);
    }
  }
  var OverloadStep5aApply = {
    visit: function(skill) {
      skill.AmountOfTargetsChainedWhenCharged += 1;
    }
  }

  var OverloadStep5aUnapply = {
    visit: function(skill) {
      skill.AmountOfTargetsChainedWhenCharged -= 1;
    }
  }

  var OverloadStep5bApply = {
    visit: function(skill) {
      skill.ShieldDamageBonusInPercent += 50;
    }
  }

  var OverloadStep5bUnapply = {
    visit: function(skill) {
      skill.ShieldDamageBonusInPercent -= 50;
    }
  }


  var OverloadStep6aApply = {
    visit: function(skill) {
      skill.AmountOfTargetsChainedWhenCharged += 1;
      skill.ChainDamage *= 1.3;
    }
  }
  var OverloadStep6aUnapply = {
    visit: function(skill) {
      skill.AmountOfTargetsChainedWhenCharged -= 1;
      skill.ChainDamage = roundUp((skill.ChainDamage * 0.7), 2);
    }
  }

  var OverloadStep6bApply = {
    visit: function(skill) {
      skill.ShieldDamageBonusInPercent += 50;
      skill.SyntheticDamageBonusInPercent += 50;
    }
  }
  var OverloadStep6bUnapply = {
    visit: function(skill) {
      skill.ShieldDamageBonusInPercent -= 50;
      skill.SyntheticDamageBonusInPercent -= 50;
    }
  }

}
