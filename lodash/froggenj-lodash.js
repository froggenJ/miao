var froggenj = {
  /**
   * 
   * @param {*} [1,2,3],2
   * @return [[1,2],[3]] 
   */
  chunk:function(ary,size = 1){
    var res = []
    var start = 0
    var i = 0
    while(i<ary.length){
      i += size
      if(i > ary.length){
        res.push(ary.slice(start))
      }else{
        res.push(ary.slice(start,i))
      }
      start = i
    }
    return res
  },
  /**
   * 
   * @param {*} ary [0,2,3,"",false,5]
   * @return [2,3,5] 
   */
  compact:function (ary) {
    return ary.filter(it=>it)
  },
  /**
   * 
   * @param {*} ary  [1,2],2,[3],[[4]]
   * @return [1,2,2,3,[4]]
   */ 
  concat:function(ary,...values){
    for(var val of values){
      if(Array.isArray(val)){
        ary.push(...val)
      }else{
        ary.push(val)
      }
    }
    return ary
  },
  /**
   * @param [1,2,3],[1,2]
   * @return [3]
   */
  difference:function(ary,...values){
    var cmp = []
    for(var val of values){
      cmp.push(...val)
    }
    return ary.filter(it=>!cmp.includes(it))
  },
  /**
   * 
   * @param {*} ary [1.2,2.1]
   * @param {*} values [2.1,2.4]
   * @param {*} iteratee Math.floor
   * @return [1]
   */
  differenceBy:function(ary,values,iteratee=_.identity){
    if(typeof(iteratee)=="function"){
      return froggenj.difference(ary.filter(it=>iteratee(it)),values.filter(it=>iteratee(it)))
      
    }else if(typeof(iteratee)=="string"){
      return forggenj.difference(ary.filter(it=>iteratee in it),values.filter(it=>iteratee in it))
    }
  },
  /**
   * 
   * @param {ary} ary 
   * @param {ary} values 
   * @param {function} comparator 
   */
  differenceWith:function(ary,...values,comparator){
    return ary.filter(it=>!comparator(it,...values))
  },
  /**
   * 
   * @param {array} ary [1,2,3]
   * @param {number} n 2
   * @returns [3]
   */
  drop:function(ary,n=1){
    return ary.slice(n)
  },
  dropRight:function(ary,n=1){
    return ary.slice(0,n)
  },
  dropRightWhile:function(ary,predicate){
    if(typeof(predicate)=="function"){
      
    }
  },
  flatten:function (ary) {
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

  flattenDeep:function (ary) {
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

  flattenDepth:function (ary,depth = 1) {
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
  },

  //将函数的参数倒着传
  filp:function (f) {
    return function (...args) {
      return f(...args.reverse())
    }
  },

  //Array:
  reverse:function (ary) {
    var l = ary.length-1
    var res = []
    //ary.forEach(it=>{res.unshift(it)})
    for(var i = l;i >=0;i--){
      res.push(ary[i])
    }
    return res
  },
 
 //Function: 当调用次数小于n 调用fuc 否则调用最后一次
 before: function (n,func) {
    var times = 0 
    var lastRes
    return function (...args) {
      times++
     if(times < n){
      return lastRes = func(...args)
     }else{
      return lastRes
     }
   }
 },

 after:function (n,func) {
   var times = 0
   return function (...args) {
     times++
     if(times >= n){
      return func(...args)
     }else{
      return
     }
   } 
 },

 //Function ary
 ary:function (f,n = f.length) {
   return function (...args) {
     return f(...args.slice(0,n))
   }
 },


 unary:function (f) {
   return function (...args) {
     return f(...args[0])
   }
 },
}


