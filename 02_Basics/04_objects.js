// const user= new Object();

// console.log(user); // {}
// user.name="Sujal";
// user.id=101;

const user = {
    name: "Sujal",
    age: 21,
     fullname: {
        userfullname:{
             first: "Sujal",
             last: "Kumar"
        }
       
    }
}
console.log(user);// 
console.log(user.fullname);
console.log(user.fullname.userfullname.first); // Sujal

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

const obj3 = {obj1, obj2};
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// here obj1 and obj2 are treated as keys

const obj4 = {...obj1, ...obj2};// spread operator
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// here 1,2,3,4 are treated as keys

//interview questions are
console.log(user.fullname); // { userfullname: { first: 'Sujal', last: 'Kumar' } }
console.log(user["fullname"]); // { userfullname: { first: 'Sujal', last: 'Kumar' } }
// both are same

console.log(user.fullname.userfullname.first); // Sujal
console.log(user["fullname"]["userfullname"]["first"]); // Sujal
// both are same

console.log(user.fullname.first); // error first is not defined
console.log(user["fullname"]["first"]); // error first is not defined
// both are same


//object destructuring 
//it is a way to extract properties from an object and assign them to variables

const course ={
    coursename: "ReactJS",
    price: "999",
    courseInstructor: "Sujal"
}
const {courseInstructor} = course; // object destructuring
console.log(courseInstructor); // Sujal
const {courseInstructor: instructor} = course; // object destructuring
console.log(instructor); // Sujal
