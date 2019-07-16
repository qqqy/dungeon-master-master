export default function(player , requirements){
  if(!player) return;
  let p = {...player}
  // Next two lines cancel out advantage and disadvantage
  if(p.attackAdvantage === p.attackDisadvantage){p.attackAdvantage = false; p.attackDisadvantage = false;}
  if(p.defenseAdvantage === p.defenseDisadvantage){p.defenseAdvantage = false; p.defenseDisadvantage = false;}
  for(let key in requirements){
    if(requirements[key] !== p[key])return false
  }
  return true;
}