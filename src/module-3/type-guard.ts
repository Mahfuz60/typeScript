//key of guard

type AddType = number | string;

function add(param1: AddType, param2: AddType): AddType {
  if (typeof param1 == 'number' && typeof param2 == 'number') {
    return param1 + param2;
  } else {
    return param1.toString + param2.toString();
  }
}
add('5', '10');
add(5, 10);

//In guard [basically animalect ar jonne besi used hoie thake]

type NormalUserType = {
  name: string;
};
type AdminUserType = {
  name: string;
  role: 'admin';
};

function getUser(user: NormalUserType | AdminUserType) {
  if ('role' in user) {
    return `I am an Admin and my role is ${user.role}`;
  } else {
    return `you are a normal used`;
  }
}

const normalUser1: NormalUserType = { name: 'Mr. X' };
const adminUser1: AdminUserType = { name: 'Mr. Y', role: 'admin' };
// console.log(getUser(adminUser1));
// console.log(getUser(normalUser1));

//instance Of guard
class Animals {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log('I am making sound');
  }
}

class Dog extends Animals {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeBark() {
    console.log('I am barking!');
  }
}
class Cat extends Animals {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log('I am Meawing!');
  }
}

function getAnimals(animal:Animals){
  if(animal instanceof Dog){
    animal.makeBark();
  }else if(animal instanceof Cat){
    animal.makeMeaw();
  }



}

const animal1=new Dog("German vai","dog") ; //instance->dog
const animal2=new Cat("parsian vai","cat") ; //instance->cat

getAnimals(animal1);
getAnimals(animal2);


// funtion checking with instance of

// function isDog(animal:Animals):animal is Dog{
//   return animal instanceof Dog;
// }
// function isCat(animal:Animals):animal is Cat{
//   return animal instanceof Cat;
// }

// function getAnimals(animal:Animals){
// if(isDog(animal)){
//   animal.makeBark();
  
// } else if(isCat(animal)){
//   animal.makeMeaw();
// }



// }