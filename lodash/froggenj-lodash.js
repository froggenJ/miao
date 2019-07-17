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

  every:function (ary,predicate) {
    ary.reduce((result,item)=>{return result && predicate(item)},true)
  },

  some:function (ary,predicate) {
    // ary.reduce((result,item)=>{return result || predicate(item)},false)
    return !every(ary,froggenj.negate(predicate))
  },

  negate:function (f) {
    return function (...args) {
      return !f(...args)
    }
  },

}