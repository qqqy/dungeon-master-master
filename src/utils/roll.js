function result(die, times = 1){
  ++die
  const rolls = [];
  for(let i = 0; i < times; i++){
    rolls.push(Math.floor(Math.random() * (die - 1) + 1));
  }
  return rolls;
}

export default {
  d20(mod){
    let cb = () => 0;
    if(mod === "advantage") cb = (a,b) => b - a;
    if(mod === "disadvantage") cb = (a,b) => a - b;
    return result(20 , 2).sort(cb)[0]
  },
  percentile(){
    return result(100)[0];
  },
  damage(die, times = 1){
    return result(die, times).reduce((acc, num) => acc + num , 0)
  }
}