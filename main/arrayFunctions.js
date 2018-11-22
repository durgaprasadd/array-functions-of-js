const map = function(mapper,list,result=[]){
  if(list.length == 0){
    return result;
  }
  result.push(mapper(list[0]));
  list=list.slice(1);
  return map(mapper,list,result);
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

const predicatePrime = function(predicate){
  return function(accumulator,element){
    if(predicate(element)){
      accumulator.push(element);
    }
    return accumulator;
  }
}

const filterPrime = function(predicate,list){
  return reduce(predicatePrime(predicate),list,[]);
}


exports.module = { map,filter,reduce,mapPrime,filterPrime };
