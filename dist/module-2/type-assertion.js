"use strict";
let anything;
anything = "Next Level Course";
anything.length;
anything.length;
function KgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The Converted result is ${value} gm`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const resultToNumber = KgToGram(100);
const resultToString = KgToGram(100);
try {
}
catch (error) {
    console.log(error.message);
}
