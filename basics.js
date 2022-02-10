"use strict";

document.addEventListener("DOMContentLoaded", start);

function start() {
    console.log(start);
}


// different types of variables
// const bool = true;
// const num = 41;
// const str = "Peter";
// const obj = {
//     cats: 2,
//     cats: 1
// }
// const nothing = null;
// let undf;
// const symbol = Symbol("symbol");

// this is typeoff to write in the console
// typeof bool;
// typeof num;
// typeof str;
// typeof obj;
// typeof nothing;
// typeof undf;
// typeof symbol;


// const n1 = 1;
// const n2 = 2;

// const s1 ="1";
// const s2 ="2";

const value = true;
if( value ) {
    console.log("Value is truthy");
}else {
    console.log("Value is falsyy");
}