const map = function(functionToApply,list){
  let result =[];
  for(let value of list){
    result.push(functionToApply(value));
  }
  return result;
}

const filter = function(functionToApply,list){
  let result=[];
  for(let value of list){
    if(functionToApply(value)){
      result.push(value);
    }
  }
  return result;
}

const reduce = function(functionToApply,list,accumulator=list[0]){
  for(let value of list){
    accumulator = functionToApply(accumulator,value);
  }
  return accumulator;
}


exports.module = { map,filter,reduce };
