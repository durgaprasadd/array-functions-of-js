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

const mapperPrime = function(mapper){
  return function(accumulator,element){
   accumulator.push(mapper(element));
    return accumulator;
  }
}

const mapPrime = function(mapper,list){
  return reduce(mapperPrime(mapper),list,[]);
}


exports.module = { map,filter,reduce,mapPrime };
