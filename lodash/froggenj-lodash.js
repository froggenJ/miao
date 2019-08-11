var froggenj = {

  
  compact:function (arr) {
    return arr.filter(it=>it)
  },

  faltten:function (ary) {
    var result = []
    for(var val of ary){
      if(Array.isArray(val)){
        result.push(...val)
      }else{
        result.push(val)
      }
    }
    return result
  },

  falttenDeep:function (ary) {
    var result = []
    for(var val of ary){
      if(Array.isArray(val)){
        var flattenVal = froggenj.falttenDeep(val)
        result.push(...flattenVal)
      }else{
        result.push(val)
      }
    }
    return result
  },

  falttenDepth:function (ary,depth = 1) {
    var result = []
    for(var val of ary){
      if(Array.isArray(val)){
        var falttenVal = froggenj.falttenDepth(val,depth-1)
        result.push(...falttenVal)
      }else{
        result.push(val)
      }
    }
    return result
  },

  //每一个都满足
  every: function(ary,predicate){
    for(var i = 0;i <ary.length;i++){
      if(!predicate(ary[i])){
        return false
      }
    }
    return true
  },

  //其中一个满足
  some:function (ary,predicate) {
    ary.reduce((result,item)=>{
      if(result||predicate(item)){
        return true
      }
    },false)
    return false
  },

  negate:function (f) {
    return function (...args) {
      return !f(...args)
    }
  }

}


