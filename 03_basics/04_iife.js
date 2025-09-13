// Immediately Invoked Function Expression (IIFE)

(function() {
    const greeting = "Hello, Friends!";
    console.log(greeting); // Outputs: Hello, World!
})(); //global scope ke pollution se bachane ke liye IIFE ka use karte hain kyuki isse ek naya scope create hota hai
        // jo global scope ko affect nahi karta

// The function is defined and immediately invoked, creating a new scope for the variable 'greeting'.
// This prevents 'greeting' from polluting the global scope.

//named IIFE function
(function greet() {
    console.log("Hello from named IIFE");
})(); // IIFE
// console.log(greet()); // error greet is not defined


( ()=> {
    console.log("Hello from IIFE with arrow function");
})(); // arrow function IIFE

((name)=> {
    console.log(`Hello from IIFE with arrow function ${name}`);
})("sujal"); // arrow function IIFE