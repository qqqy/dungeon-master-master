export default {
  halfCover: {
    name: "halfCover",
    value: true,
    remove: ["threeQuarterCover", "fullCover"],
    duration: 5,
    expire: null,
    expired(turn){
      if(turn >= this.expire) return true;
      return false
    }
  },
  actionFalse: {
    name: "action",
    value: false,
    duration: 1,
    expire: null,
    expired(turn){
      if(turn >= this.expire) return true;
      return false
    }
  },
  canTargetFalse: {
    name: "canTarget",
    value: false,
    duration: 10,
    expire: null,
    expired(turn){
      if(turn >= this.expire) return true;
      return false
    }
  },
  action: {
    name: "action",
    value: true,
    duration: 1,
    expire: null,
    expired(turn){
      if(turn >= this.expire) return true;
      return false;
    }
  }
}