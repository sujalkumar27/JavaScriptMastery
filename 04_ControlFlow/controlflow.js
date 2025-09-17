//interview questions on control flow

//1. What is control flow in programming?
//Control flow refers to the order in which individual statements, instructions, or function calls are executed or evaluated in a program. It determines how the program's execution proceeds based on certain conditions or loops.

//2. What are the different types of control flow statements in JavaScript?
//The main types of control flow statements in JavaScript include:
//- Conditional statements: if, else if, else, switch
//- Looping statements: for, while, do...while
//- Jump statements: break, continue, return


//conditional statements coding interview questions

//1. Write a function that takes a number as input and returns whether it is positive, negative, or zero.
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checkNumber(5)); // Positive
console.log(checkNumber(-3)); // Negative
console.log(checkNumber(0)); // Zero

//2. Most ask and hard interview question
//Write a function that takes a grade (A, B, C, D, F) as input and returns the corresponding description (e.g., A = Excellent, B = Good, etc.) using a switch statement.
function getGradeDescription(grade) {
    switch (grade) {
        case 'A':
            return "Excellent";
        case 'B':
            return "Good";
        case 'C':
            return "Average";
        case 'D':
            return "Below Average";
        case 'F':
            return "Fail";
        default:
            return "Invalid grade";
    }
}
console.log(getGradeDescription('A')); // Excellent
console.log(getGradeDescription('C')); // Average
console.log(getGradeDescription('F')); // Fail
console.log(getGradeDescription('X')); // Invalid grade
