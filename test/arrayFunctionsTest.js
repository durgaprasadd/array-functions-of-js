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

describe('map',()=>{
  it("should return empty array when input is empty array",()=>{
    assert.deepEqual(map(addOne,[]),[]);
  })
  it("should return single element array when input is single element array",()=>{
    assert.deepEqual(map(addOne,[1]),[2]);
  })
  it("should return same length of array",()=>{
    assert.deepEqual(map(addOne,[2,3]),[3,4]);
  })
})

describe("filter",function(){
  it("should return empty array when input is empty array",function(){
    assert.deepEqual(filter(isEven,[]),[]);
  })
  it("should return empty array",function(){
    assert.deepEqual(filter(isEven,[1]),[]);
  })
  it("should return same array",function(){
    assert.deepEqual(filter(isEven,[2]),[2]);
  })
  it("should return array of filtered elements",function(){
    assert.deepEqual(filter(isEven,[1,2,3,4,5,6]),[2,4,6]);
  })
})

describe("reduce",function(){
  it("should return accumulator when array is empty",function(){
    assert.deepEqual(reduce(greatestNumber,[],1),1);
    assert.deepEqual(reduce(add,[],1),1);
  })
  it("should return value when accumulator is empty and array non empty",function(){
    assert.deepEqual(reduce(greatestNumber,[1,2]),2);
    assert.deepEqual(reduce(add,[1,2]),3);
  })
  it("should return value when accumulator and array are not empty",function(){
    assert.deepEqual(reduce(greatestNumber,[1,2,3,4],5),5);
    assert.deepEqual(reduce(add,[1,2,3,4],5),15);
  })
})
