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
abstract class Vehicle {
  constructor(public name: string, public model: string, public brand: string) {}

  abstract startEngine(): void;
  abstract stopEngine(): void;

  moveEngine(): void {
    console.log('moving to vehicle font side');
  }

  
}

class Car extends Vehicle {
  startEngine(): void {
    console.log('I am starting Engine');
  }
  stopEngine(): void {
    console.log('I am stoping engine');
  }
}
