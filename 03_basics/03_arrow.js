const user={
    username: "sujal",
    age: 21,
   welcomeMessage: function() {
        console.log( `${this.username}! , Welcome to website`);
    }
} 
// user.welcomeMessage(); // sujal! , Welcome to website
// console.log(this); // window object
// function fn() {
//     console.log(this); // window object
// }
// fn();
//we donot use this keyword in functions

//arrow function
const add = (a, b) => {
    return a + b;
}
add(5, 10); // 15

const addTwo=(num1 , num2) => {  return num1 + num2;} // implicit return
console.log(addTwo(5, 10)); // 15

const addTwo1=(num1 , num2) => num1 + num2; // implicit return
console.log(addTwo1(5, 10)); // 15

const addTwo2= (num1 , num2) => (num1 + num2); // implicit return
console.log(addTwo2(5, 10)); // 15

const addTwo3= (num1 , num2) => ({name: "sujal"});
console.log(addTwo3(5, 10)); // { name: 'sujal' }

const myArray = [2,3,5,7,11];
console.log(myArray.length); // 5


