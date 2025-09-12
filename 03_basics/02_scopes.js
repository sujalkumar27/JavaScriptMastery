//scopes in js
//it is the area where a variable is defined
//there are 3 types of scopes in js
//1. global scope
//2. function scope
//3. block scope

//global scope
var a = 10; //global variable
function fn() {
  console.log(a); //10
}
fn();
console.log(a); //10

//function scope
function fn2() {
  var b = 20; //function variable 
  console.log(b); //20
}
fn2();
//console.log(b); //error: b is not defined

//block scope
if (true) {
  let c = 30; //block variable
  console.log(c); //30
}
//console.log(c); //error: c is not defined

for (let i = 0; i < 5; i++) {
  console.log(i); //0,1,2,3,4
}
//console.log(i); //error: i is not defined

//var is function scoped
if (true) {
  var d = 40; //global variable
  console.log(d); //40
}
console.log(d); //40

for (var j = 0; j < 5; j++) {
  console.log(j); //0,1,2,3,4
}
console.log(j); //5

//let and const are block scoped
//var is function scoped

//summary
//global scope: variable is defined outside any function or block
//function scope: variable is defined inside a function
//block scope: variable is defined inside a block (if, for, while, etc.)
//var is function scoped
//let and const are block scoped


//--------------------------Interesting -----------------------------

console.log(addTwo(3)); //5
function addTwo(num) {
  return num + 2;
}
console.log(multiplyByTwo(3)); //error: multiplyByTwo is not defined
//function expression
//function expression is not hoisted
const b=function multiplyByTwo(num) {
  return num * 2;
}

//---------------------------------------------------------------------------

//nested function scope

//in function inside the function the scope works like a nested function
function outer() {
  var x = 100; //outer function variable
  function inner() {
    var y = 200; //inner function variable
    console.log(x); //100 (can access outer function variable)
    console.log(y); //200
  }
  inner();
  //console.log(y); //error: y is not defined (cannot access inner function variable)
}
outer();
//console.log(x); //error: x is not defined (cannot access outer function variable)

//lexical scope
function outer2() {
  var x = 100; //outer function variable
  function inner2() {
    var y = 200; //inner function variable
    function inner3() {
      var z = 300; //innermost function variable
      console.log(x); //100 (can access outer function variable)
      console.log(y); //200 (can access inner function variable)
      console.log(z); //300
    }
    inner3();
    //console.log(z); //error: z is not defined (cannot access innermost function variable)
  }
  inner2();
  //console.log(y); //error: y is not defined (cannot access inner function variable)
}
outer2();
//console.log(x); //error: x is not defined (cannot access outer function variable)

//closure
function outer3() {
  var x = 100; //outer function variable
  function inner4() {
    console.log(x); //100 (can access outer function variable)
  }
  return inner4;
}
const closure = outer3();
closure(); //100 (can access outer function variable even after outer function is executed)

//summary
//scopes in js: global scope, function scope, block scope
//var is function scoped, let and const are block scoped
//nested functions can access variables of their parent functions (lexical scope)
//closure: inner function can access variables of its parent function even after the parent function is executed