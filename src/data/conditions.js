export default class Condition{
  constructor(name , value = true , removeArray = [] , ){

  }
}

// {
//   name: "halfCover",
//   value: true,
//   remove: ["threeQuarterCover", "fullCover"],
//   duration: 5,
//   expire: null,
//   expired(turn){
//     console.log("Expire:" , this.expire, turn)
//     if(turn >= this.expire) return true;
//     return false
//   }
// }