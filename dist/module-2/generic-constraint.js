"use strict";
;
const personInfoDetail = (personInfo) => {
    const personWife = "will smith";
    const updateData = Object.assign(Object.assign({}, personInfo), { personWife });
    return updateData;
};
const personInfo = {
    name: "ahmed redoy",
    age: 27,
    salary: 100000,
    role: "hardware and software engineer",
    isActive: true
};
const personData = personInfoDetail(personInfo);
