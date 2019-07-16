var froggenj = {
  compact : function (arr) {
    return arr.filter(it=>it)
  },

  every : function function (ary,predicate) {
    ary.reduce((result,item)=>{return result && predicate(item)},true)
  },

  some : function (argument) {
    ary.reduce((result,item)=>{return result && predicate(item)},false)
  },
}