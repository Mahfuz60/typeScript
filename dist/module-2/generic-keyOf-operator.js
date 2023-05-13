"use strict";
const person1 = "name";
const persons = "address";
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: "Mr.X", age: 100 }, "age");
