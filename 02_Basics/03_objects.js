//Object.create(null); // creates an object with no prototype
// object literal 

//symbol
const sym1 = Symbol('key1') 

const person = {
    name: "Sujal",
    "full name":"sujal kumar", 
    sym1: "value1",//this is not a symbol key
    [sym1]:"value2",//this is a symbol key
    age: 21,
    hobbies: ['coding', 'reading', 'gaming'],
    address: {                  // nested object
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); // Sujal
 console.log(person["age"]);
// console.log(person.full name); // error
 console.log(person["full name"]); // sujal kumar
console.log(person.sym1); // value1
console.log(person[sym1]);

Object.freeze(person); // freezes the object, makes it immutable means cannot change value
person.age = 25; // will not change the age
console.log(person.age); // 21
