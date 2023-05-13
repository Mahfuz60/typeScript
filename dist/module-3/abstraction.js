"use strict";
//used in interface
// interface Ivehicle{
//   name:string,
//   model:string,
//   brand:string
// }
// const vehicle:Ivehcle={
//   name:"Car",
//   model:'2002',
//   brand:"corola"
// }
// interface IVehicle {
//   startEngine(): void;
//   stopEngine(): void;
//   moveEngine(): void;
// }
// class Car implements IVehicle {
//   constructor(public name: string, public model: string, public brand: string) {}
//   startEngine(): void {
//     console.log('I am starting engine....');
//   }
//   stopEngine(): void {
//     console.log('I am stoping this engine');
//   }
//   moveEngine(): void {
//     console.log('moving to vehicle font side');
//   }
//   test() {
//     console.log('I am for testing purpose');
//   }
// }
// const vehicle1 = new Vehicle('car', '20002', 'Toyota');
//used in abstac class
class Vehicle {
    constructor(name, model, brand) {
        this.name = name;
        this.model = model;
        this.brand = brand;
    }
    moveEngine() {
        console.log('moving to vehicle font side');
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log('I am starting Engine');
    }
    stopEngine() {
        console.log('I am stoping engine');
    }
}
