"use strict";

// // its the same object, but the variables can be different
// // both of the variables are pointing to the same object.

// const person1 = {
//     firstName: "Peter",
//     age: 29,
//     student: false
// };

// const person2 = person1;

// person2.firstName = "other peter";

// console.log(person1.firstName);

// // will point to the same object again.  another name for the same object
// let person3 = person1;


 
// playing with variables

let person1 = {
    firstName: "Peter",
    age: 29,
    student: false
};

let person2 = {
    firstName: "Other Peter",
    age: 28,
    student: false
};

// will show person 1 and person3 as changed in the consol.
let person3 = person1;
person3.firstName = "Changed";

// will change person2 and person3 in consol to also changed
person3 = person2;

person2.firstName = "also changed";

// change all of them to also changed in console
person1 = person3;



