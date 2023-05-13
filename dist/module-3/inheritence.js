"use strict";
//common clases used
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} people daily sleeping time is ${hours}`;
    }
}
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
const student1 = new Student('Mr. Been', 20, 'North Velly,USA');
class Teacher extends Person {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(numOfClasses) {
        //different
        return `The Teacher name is ${this.name} and he is daily ${numOfClasses} classes takes it `;
    }
}
const teacher1 = new Teacher('Mr. Smith', 45, 'Califonia,USA', 'Department of Head CSE');
