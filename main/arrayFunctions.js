const map = function(mapper,list,result=[]){
  if(list.length == 0){
    return result;
  }
  result.push(mapper(list[0]));
  return map(mapper,list.slice(1),result);
}

const filter = function(predicate,list,result=[]){
  if(list.length == 0){
    return result;
  }
  if(predicate(list[0])){
    result.push(list[0]);
  }
  return filter(predicate,list.slice(1),result);
}

const reduce = function(reducer,list,accumulator){
  if(accumulator==undefined){
    accumulator = list[0];
    list = list.slice(1);
  }
  if(list.length==0){
    return accumulator;
  }
  accumulator = reducer(accumulator,list[0]);
  return reduce(reducer,list.slice(1),accumulator);
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
