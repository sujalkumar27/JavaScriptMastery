const id="12345";

let name="John Cena";

var email="abc@gmail.com";//prefer not to use var due to issue in block scope and function scope

console.log("ID:", id);

city="New York"; // Implicit global variable (not recommended)

let age; // Declared but not initialized

// id="67890"; // Reassigning of constant variable not allowed

console.table([ id ,name, email, city, age]);

//summary 
// Keyword	Function Scope	Block Scope
// var	    ✔️	 ❌
// let	    ❌	✔️
// const	❌	✔️