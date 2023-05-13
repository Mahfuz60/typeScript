"use strict";
//normal function
function addNumber(num1, num2) {
    return num1 + num2;
}
addNumber(10, 20);
//Arrow function
const addArrow = (num1, num2) => num1 + num2;
// callback function
const numberArr = [4, 3, 5, 7, 6, 10];
const newArray = numberArr.map((element) => element * element);
//object to used function
const user = {
    name: "Khairul Islam",
    balance: 100,
    addBalance(money) {
        // return this.balance+money;
        // console.log(`My New Balance is:${this.balance+money}`);
    }
};
//function used default parameter
function sumNum(num1, num2 = 10) {
    return num1 + num2;
}
sumNum(20, 30);
//spread operator
const myFriend = ["kauser", "chamak", "khairul", "rafsan", "hridoy", "dolar"];
const newFriend = ["nayem", "ovi", "monir", "nazmul", "sadia"];
myFriend.push(...newFriend);
console.log(myFriend);
// Rest Operator
const greetingFriend = (...friends) => {
    friends.forEach(friend => console.log(`Hello my dear friend ${friend}`));
    // friends.forEach(friend=>console.log(`Hello my dear friend ${friend.toLocaleUpperCase()}`));
};
greetingFriend("khairul", "mahfuz", "kauser", "nayem", "hridoy", "rafsan", "dolor");
//array and object destructuring
const myBestFrind = {
    fullName: "Ahemd Hridoy",
    age: 26,
    location: "Itally",
    isMarried: true
};
const { fullName: myFullName, age: myAge, location: myLocation } = myBestFrind;
console.log(`Name:${myFullName},\n Age:${myAge},\n Location:${myLocation}`);
