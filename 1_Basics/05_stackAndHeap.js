//stack and heap memory

let a=12;//
let b=a;//12
b++;//13
console.log(a);//12
console.log(b);//13

// Heap Example (Reference types)
let user1 = { value: 10 };  // stored in heap
let user2 = user1;           // reference (not copy)

user2.value++;  // modifying via user2

console.log(user1.value); // 11 (changed)
console.log(user2.value); // 11 (same object reference)


//stack is for primitive datatypes -- static memory allocation
//heap is for non primitive datatypes -- dynamic memory allocation


