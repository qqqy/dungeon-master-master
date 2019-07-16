export default {
  name: "Kevin",
  hitpoints: 10,
  level: 1,
  action: true,
  bonusAttack: true,
  bonusAction: true,
  reaction: true,
  attackAdvantage: false,
  attackDisadvantage: false,
  defenseAdvantage: false,
  defenseDisadvantage: false,
  lightlyObscured: false,
  heavilyObscured: false,
  canTarget: true,
  speed: 30,
  canSee: true,
  concentrating: false,
  applyHP(amt){
    this.hitpoints += amt
    return this.hitpoints
  },
}