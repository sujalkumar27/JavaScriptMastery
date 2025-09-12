//function basics
function greet(name) {
    console.log("Hello " + name);
}
greet("Sujal"); // Hello Sujal

function add(a, b) {
    return a + b;
}
const sum = add(5, 10);
console.log(sum); // 15

//if function is not returning anything  then it is returning undefined

function greet2(name) {
    console.log("Hello " + name);
}
const res = greet2("Sujal");
console.log(res); // undefined

//interview questions       
function multiply(a, b) {
    return a * b;
    console.log("This line will not be executed");
}
const result = multiply(5, 10);
console.log(result); // 50
// here the line after return statement will not be executed



