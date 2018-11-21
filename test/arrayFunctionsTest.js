let assert = require("assert");
let lib = require("../main/arrayFunctions.js").module;
let {map,filter,reduce} = lib;

const addOne = function(element){
  return element+1;
}

const isEven = function(element){
  return element%2==0;
}

const greatestNumber = function(a,b){
  return Math.max(a,b);
}

const add = function(a,b){
  return a+b;
}

const testMap = function(functionName,input,output){
  assert.deepEqual(map(functionName,input),output);
}

testMap(addOne,[],[]);
testMap(addOne,[1],[2]);
testMap(addOne,[2,3],[3,4]);

const testFilter = function(functionName,input,output){
  assert.deepEqual(filter(functionName,input),output);
}

testFilter(isEven,[],[]);
testFilter(isEven,[1],[]);
testFilter(isEven,[1,2,3],[2]);
testFilter(isEven,[1,2,3,4,5,6],[2,4,6]);


const testReduce = function(functionName,input,output){
  assert.deepEqual(reduce(functionName,input[0],input[1]),output);
}

testReduce(greatestNumber,[[],1],1);
testReduce(greatestNumber,[[1,2]],2);
testReduce(greatestNumber,[[1,2,3,4],5],5);
testReduce(greatestNumber,[[],10],10);
testReduce(greatestNumber,[[5,1,3],1],5);

testReduce(add,[[],0],0)
testReduce(add,[[1,2,3,4,5]],15)
testReduce(add,[[1,2,3,4,5],10],25)


console.log("all tests are passed!");
