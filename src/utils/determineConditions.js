export default function(){
  // Default Conditions
  let turn = 1;
  const conditions = {
    fullCover: function(){return true}
  }
  // A functions module that can alter the conditions
    return {
    addCondition(condition){
      console.log("addConditions invoked" , condition)
      condition.remove && condition.remove.forEach((val) => this.removeCondition(val));
      // An added condition first removes any conflicting conditions, then returns a function that will return the value if none of the end conditions are met.
      condition.expire = turn + condition.duration
      conditions[condition.name] = function(){
        if(condition.expired(turn)) return "expired";
        return condition.value
      }
    },
    removeCondition(target){
      // target should be a string
      delete conditions[target]
    },
    getConditions(){
      const gottenConditions = {};
      for(let key in conditions){
        if(conditions[key]() !== "expired"){
          gottenConditions[key] = conditions[key]()
        } else {
          console.log(key , " has been removed after returning " , conditions[key]())
          delete conditions[key]
        }
      };
      return gottenConditions;
    },
    setTurn(forceTurn){
      if(forceTurn){
        turn = forceTurn
        return turn
      }
      return ++turn
    },
    debugConditions(){
      return conditions
    }
  }
}

// sample condition object
const condition = {
  name: "halfCover",
  value: true,
  remove: ["threeQuarterCover", "fullCover"],
  end(){
    if(false) return true;
    return false
  }
}