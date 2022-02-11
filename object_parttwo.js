"use strict"

// object part II exercise.
const Animal = {
    name: "",
    type: "unknown",
    desc: "",
    age: 0,
};

const animal = Object.create(Animal);

Animal.image = "image.jpg";

// will console log image.jpg
console.log(animal.image);

