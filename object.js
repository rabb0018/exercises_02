"use strict";
// // exercise from Objects Part I yt
//  let person1 = {
//      firstName: "Peter",
//      age: 29,
//      student: false
//  };
// // console log is undefined
//  console.log( person1.lastName );

//  person1.lastName = "Lind";

// //  console log tells Lind
//  console.log( person1.lastName );

// //  Properties can also be removed
// person1.lastName = undefined;

// // Both console.log are undefined.
// console.log( person1.lastName );
// console.log ( person1.middleName );

// // the second way to remove Properties. This will delete it
// // when you open the object in the console.
// delete person1.lastName;
// console.log( person1.lastName );
 
// // Don't ususally use delete but if you wanna remove property set
// // the value to null, instead of undefined.




// Const objects can be modified like arrays
const person1 = {
    firstName: "Peter",
    age: 29,
    student: false
};

// adds 1 to the age. 
person1.age++;
console.log(person1);


const person2 = {
    firstName: "Rabbia",
    age: 24,
    student: true
};

// Gets an error in the console, because it is a const/object. 
// but you can change the properties instead of the object. 
// like this person1.firstName = person2.firstName;
person1 = person2;




