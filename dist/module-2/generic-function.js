"use strict";
//Arrow function
const arrayFunc1 = (param) => {
    return [param];
};
const result1 = arrayFunc1('bangladesh');
//generic function
const arrayFunc2 = (param) => {
    return [param];
};
const result2 = arrayFunc2('bangladesh');
const result3 = arrayFunc2(1000000001);
const result4 = arrayFunc2(true);
const result5 = arrayFunc2({ name: 'bangladesh', capital: 'dhaka' });
//speed operator
const crushs1 = "will smith";
const myInfo = {
    name: "mahfuz",
    age: 30,
    salary: 100000000000
};
const newData = Object.assign(Object.assign({}, myInfo), { crushs1 });
//access to function
const crushs2 = "will jan";
const myInfo2 = {
    name: "mahfuz alam",
    age: 30,
    salary: 1000000
};
const addMeInMyCrushMind = (myInfo2) => {
    const crushs2 = "will smith";
    const updateData = Object.assign(Object.assign({}, myInfo2), { crushs2 });
    return updateData;
};
const result6 = addMeInMyCrushMind(myInfo2);
