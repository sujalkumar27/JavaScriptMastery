//arrays
const myarr=[0,1,2,3,4,5];
console.log(myarr);

const fruits= new Array("apple","banana","mango");
console.log(fruits);
console.log(fruits[1]);//banana
console.log(fruits.length);//3

//arrays methods
console.log(fruits.toString());
console.log(myarr.push(6));//adds 6 to the end of the array
console.log(myarr);//[ 1, 2, 3, 4, 5, 6 ]
console.log(myarr.pop());//removes the last element of the array and returns it
console.log(myarr);//[ 1, 2, 3, 4, 5 ]

//shift and unshift
myarr.unshift(0);//adds 0 to the beginning of the array
console.log(myarr);//[ 0, 1, 2, 3, 4, 5 ]
myarr.shift();//removes the first element of the array and returns it
console.log(myarr);//[ 1, 2, 3, 4, 5 ]

//slice and splice
console.log(myarr.slice(1,4));//[1, 2, 3 ] - returns a new array from index 1 to 4 (4 not included)
console.log(myarr);//[0, 1, 2, 3, 4, 5 ] - original array remains unchanged

console.log(myarr.splice(1,2));// [1,2] removes 2 elements from index 1 to 2 and returns them
console.log(myarr);//[ 0,3, 4, 5 ] - original array is changed


