export default function (target){
  const conditions = []
  // NOTE: This would probably be a great place for a switch.
  if(target.fullCover) conditions.push("canTargetFalse");
  // if(target.defenseDisadvantage) conditions.attackAdvantage = true;
  // if(target.fullCover) conditions.canTarget = false;
  // if(target.heavilyObscured) {
  //   conditions.canSeeTarget = false; 
  //   conditions.attackDisadvantage = true;
  // }
  // if(target.prone) conditions.attackAdvantage = true;
  return conditions;
}