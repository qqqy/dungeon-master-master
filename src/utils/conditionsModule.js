const templates = []
let turn = 0

export default function returnConditionsModule(){
  return {
    addCondition(c){
      templates.push(c.build(turn))
      return templates.map(condition => ({name: condition.name, value: condition.value}))
    },
    getConditions(){
      const conditions = {};
      let valid = true;
      const index = templates.length - 1;
      for(let i = index; i >= 0; i--){
        let {requirements} = templates[i];
        for(let key in requirements){
          if(typeof conditions[key] === "boolean" && requirements[key] !== conditions[key]){
            valid = false
            break;
          }
        }
        if(valid && templates[i].expiration >= turn){
          conditions[templates[i].name] = templates[i].value
        } else {
          templates.splice(i , 1)
          valid = true;
        }
      }
      return conditions
    },
    takeTurn(skip = 1){
      turn += skip
      return turn
    }
  }
}