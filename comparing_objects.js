"use strict";

//  const student1 = {
//      firstName: "Harry",
//      lastName: "Potter"
//  };


//  //  hint if I'm still stupid --> they are the same mhahaha
//  const student2 = student1;


//  if( student1 == student2 ){
//      console.log("They are the same!");
//  } else {
//      console.log("They are not.. bro");
//  }


//  how about these two? --> hint they will not be the same

const student1 = {
    firstName: "Harry",
    lastName: "Potter"
};

const student2 = {
    firstName: "Harry",
    lastName: "Potter"

};



// new exercise inbetween here
// try making one object like the other
// they will not turn out the same
// why? because it aint' pointing to the same object bro. 
student1.firstName = student2.firstName;
student1.lastName = student2.lastName;



// why you ask? becuase the variables points to 2 different objects. 
 if( student1 == student2 ){
     console.log("They are the same!");
 } else {
     console.log("They are not the same.. bro");
 }

// try modifying one object
// it will show student1 as potty potter
// student2 as Harry potter becuase it is changing a property inside the object.
// student1.firstName = "Potty";
// console.log(student1);
// console.log(student2);