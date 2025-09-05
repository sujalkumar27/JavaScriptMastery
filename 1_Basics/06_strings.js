//strings

// const name="sujal"
// const a=30
// console.log(name+a);
//console.log('hello my name is ${name} and age is ${30}');

const str=new String("hello world");
console.log(str.toUpperCase());//HeLLO WORLD
console.log(str.toLowerCase());//hello world
console.log(str.length);//11
console.log(str.indexOf("o"));//4 gives the first index of the character
console.log(str.lastIndexOf("o"));//7  gives the last index of the character
console.log(str.charAt(3));//l gives the characte at that index
console.log("---------------------");

console.log(str.endsWith("d"));//true checks if the string ends with that character
console.log(str.startsWith("h"));//true checks if the string starts with that character
console.log(str.includes("wor"));//true checks if the string includes that character
console.log("---------------------");

console.log(str.substring(0));//hello world - prints from index 0 to end
console.log(str.slice(0));//hello world - prints from index 0 to end
console.log(str.substring(0,5));//hello - prints from index 0 to 5
console.log(str.slice(0,5));//hello - prints from index 0 to 5
console.log("---------------------");

console.log(str.split(" "));//[ 'hello', 'world' ] - splits the string at the given character and returns an array
console.log(str.replace("world","sujal"));//hello sujal - replaces the first occurrence of the character
console.log(str.trim());//hello world - removes the whitespace from both ends
console.log(str.trim().length);//11 - removes the whitespace from both ends and returns the length
console.log(str.concat(" ","and welcome to js"));//hello world and welcome to js - concatenates the strings
console.log(str.repeat(2));//hello worldhello world - repeats the string n times
console.log("---------------------");
const url="https://www.sujal.com/sujal?v=sujal";
console.log(url.split("?"));//[ 'https://www.sujal.com/sujal', 'v=sujal' ] - splits the string at the given character and returns an array
console.log(url.replace("?","/sujal"));//https://www.sujal.com/sujal - replaces the first occurrence of the character