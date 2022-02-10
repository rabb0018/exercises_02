"use strict";

// // backslash makes a line break for us. 
// // can use \n but that only works in the console and not in the editor. 
//  const longline =" a very, very, very, very, VERY! long line of text, \
//  that spans across the width of the eidtor!";

// // // template literalss with accent grave, can also use concatenation. 
// // // You can also put in a classic line break in the template literal
// // // like on line 16.
// const name = "Rabbia";
// const drink = "Faxe Kondi";

// console.log(`Hello ${name}, 
// would you like a ${drink}?`);


// // length exerciseeses to show how many character long name is. 

// const len = name.length;

// console.log(`${name} is ${len} characters long`);

// // getting a single character with index
// const letter = name[0];
// console.log(`the first letter of the ${name} is ${letter}`);

// exercises with length and index
// what is the toalt number of characters, including spaces?
const name = "Albus Percival Wulfric Brian Dumbledore";
const len = name.length;

console.log(`Total numbers of characters is: ${len}`);


// what is the character at the index 2? 
const secondIndex = name[2];

console.log(`The second letter of ${name} is ${secondIndex}`);

// Which character is at the index 6?

const sixthIndex = name[6];

console.log(`The sixth index letter of ${name} is ${sixthIndex}`);

// what is the index of the first D in Dumbledore? 

const twentyninethIndex = name[29];

console.log(`The 30 index letter of ${name} is ${twentyninethIndex}`);


// what is the index of the last e in Dumbledore?

const lastIndex = name[38];

console.log(`The 39 index letter of ${name} is ${lastIndex}`);

//  string methods, trim removes space in the beginning and in the end. 
// aswell as with \t (tab).

const str1 = "   There is          space here \n  ";
const str2 = str1.trim();

console.log(str2);

// method parameters

const fullname = "Peter Heronimous Lind";
const firstName = fullname.substring(0, 6);

// goes on to the end 
const lastName = fullname.substring(17);

console.log(`first name is: _${firstName}_`);
console.log(`last name is: _${lastName}_`);

// quick exercises with substring 
// figure out which values you need in .substring to get these results

const hogName = "Albus Percival Wulfric Brian Dumbledore";

// 1. Albus
const firstHogName = hogName.substring(0, 5);
console.log(`_${firstHogName}_`);

// 2. Dumbledore (can you do it with just one parameter? (the answer is yes bitch))
const lastHogName = hogName.substring(29);
console.log(`_${lastHogName}_`);

// 3. Wulfric
const middleHogName = hogName.substring(15, 22);
console.log(`_${middleHogName}_`);

// 4. Wulfric with spaces 
const middleSpaceHogName = hogName.substring(14, 23);
console.log(`_${middleSpaceHogName}_`);

// 5. ian
const middleHogNameIan = hogName.substring(25, 28);
console.log(`_${middleHogNameIan}_`);

// 6. bus
const firstHogNameBus = hogName.substring(2, 5);
console.log(`_${firstHogNameBus}_`);



















