export default function(player , action){
  if(!player) return;
  if(player[action.time]) return true;
  return false;
}