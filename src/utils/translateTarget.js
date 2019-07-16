export default function (target){
  const conditions = {}
  if(target.defenseAdvantage) conditions.attackDisadvantage = true;
  if(target.defenseDisadvantage) conditions.attackAdvantage = true;
  if(target.fullCover) conditions.canTarget = false;
  if(target.heavilyObscured) {
    conditions.canSeeTarget = false; 
    conditions.attackDisadvantage = true;
  }
  if(target.prone) conditions.attackAdvantage = true;
  return conditions;
}