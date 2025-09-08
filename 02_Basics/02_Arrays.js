const marvel_heroes = ['spiderman', 'ironman', 'thor'];

const dc_heroes = new Array('batman', 'superman', 'flash');

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes); // ['spiderman', 'ironman', 'thor', ['batman', 'superman, 'flash']]
console.log(marvel_heroes[3][1]); // superman

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes); // ['spiderman', 'ironman', 'thor', 'batman', 'superman, 'flash']

const all_heroes2 = [...marvel_heroes, ...dc_heroes];// using spread operator more than 2 values are possible to add
console.log(all_heroes2); // ['spiderman', 'ironman', 'thor', 'batman', 'superman, 'flash']

const another_array = [1,2,3,[1,3,4], 5,6, [1,2,[3,4,5]]];
const real_another_array = another_array.flat(1);// flattens the array upto the specified depth
console.log(real_another_array);// [ 1, 2, 3, 1, 3, 4, 5, 6, 1, 2, [ 3, 4, 5 ] ]
const real_another_array2 = another_array.flat()
//  when we give infinity in the parameter then it gives all the depths in the array
console.log(real_another_array2);// [ 1, 2, 3, 1, 3, 4, 5, 6, 1, 2, 3, 4, 5 ] - default depth is 1

console.log(Array.isArray("Sujal"));// false checks value is array or not
console.log(Array.from("Sujal"));// [ 'S', 'u', 'j', 'a', 'l' ] converts string to array
console.log(Array.from({name:"sujal"}));// interesting   output:[]
// converts object to array but object should have length property
// if object has length property then it will create an array of that length with undefined values



let a=100;
let b=200
let c=300
console.log(Array.of(a,b,c));//[ 100, 200, 300 ] creates an array from the given values