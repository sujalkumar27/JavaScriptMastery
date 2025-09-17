//iterations in javascript

//for loop
for(let i=0; i<5; i++){
    console.log("For Loop Iteration: " + i);
}

//while loop
let j = 0;
while(j < 5){
    console.log("While Loop Iteration: " + j);
    j++;
}

//do-while loop
let k = 0;
do{
    console.log("Do-While Loop Iteration: " + k);
    k++;
} while(k < 5);         
//infinite loop
// for(let i=0; i>=0; i++){
//     console.log("Infinite Loop Iteration: " + i);
// }

//break statement
for(let i=0; i<10; i++){
    if(i === 5){
        break; //exit the loop when i is 5
    }
    console.log("Break Statement Iteration: " + i);
}

//continue statement
for(let i=0; i<10; i++){
    if(i % 2 === 0){
        continue; //skip even numbers
    }
    console.log("Continue Statement Iteration (Odd Numbers): " + i);
}

//nested loops
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log(`Nested Loop Iteration: i=${i}, j=${j}`);
    }
}

//for...of loop
for(const value of arr){
    console.log("For...of Loop Element: " + value);
}

//for...in loop (used for objects)
const obj = {a: 1, b: 2, c: 3};
for(const key in obj){
    console.log(`For...in Loop Key: ${key}, Value: ${obj[key]}`);
}

//Most asked interview question
//Write a function that takes an array of numbers and returns the sum of all even numbers in the array.
function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for(const num of numbers){
        if(num % 2 === 0){
            sum += num;
        }
    }
    return sum;
}
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12 (2 + 4 + 6)
console.log(sumOfEvenNumbers([10, 15, 20, 25])); // Output: 30 (10 + 20)    

