const map = function(mapper,list){
  let result =[];
  for(let value of list){
    result.push(mapper(value));
  }
  return result;
}

const filter = function(predicate,list){
  let result=[];
  for(let value of list){
    if(predicate(value)){
      result.push(value);
    }
  }
  return result;
}

const reduce = function(reducer,source,accumulator){
  let list = source.slice();
  if(accumulator == undefined){
    accumulator = list.shift();
  }
  for(let value of list){
    accumulator = reducer(accumulator,value);
  }
  return accumulator;
}


exports.module = { map,filter,reduce };
