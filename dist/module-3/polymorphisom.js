"use strict";
//polymorphisom way at a time work in multiple task
class Persons {
    takeNap() {
        console.log(`I am sleeping 8 hours per day`);
    }
}
class Students extends Persons {
    takeNap() {
        console.log(`I am sleeping 10 hours per day`);
    }
}
class Developer extends Persons {
    takeNap() {
        console.log(`I am sleeping 5.5 hours per day`);
    }
}
function getNap(param) {
    param.takeNap();
}
const persons1 = new Persons();
const students1 = new Students();
const developer1 = new Developer();
getNap(persons1);
getNap(students1);
getNap(developer1);
//calculate to shape ,circle,rectangle
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(redius) {
        super();
        this.redius = redius;
    }
    getArea() {
        return Math.PI * this.redius * this.redius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circle(8));
getAreaOfShape(new Rectangle(10, 10));
