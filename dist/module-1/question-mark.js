"use strict";
var _a, _b;
const age = 25;
// if(age>=18){
//   console.log("yes ,you are access this");
// }else{
//   console.log("You didnot access it!");
// }
// ternery operator
const isAdult = age >= 18 ? "Yes" : "No";
// console.log(isAdult);
//Nullish Coeslancing Operator
//null and undefined [only work]
const isAuthenticatedUser = null;
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest User";
console.log(userName);
const manush1 = {
    name: "ahmed hridoy",
    age: 30,
    address: {
        city: "jatrabari",
        road: "25",
        // home:"midJatrabari"
    }
};
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No Home"; //default No Home
console.log({ home });
