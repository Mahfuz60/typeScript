// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   age: number;

//   constructor(name: string, species: string, sound: string, age: number) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//     this.age = age;
//   }

//   makeSound(){
//     console.log(`The ${this.name} says ${this.sound} and age is ${this.age} year old`); //german shephard says ghew ghew and age is 12 year old

//   }
// }

// const dog=new Animal("german shepard","dog","ghew ghew",12);
// dog.makeSound();

// const cat=new Animal("persian","cat","mewo mewo",6);
// cat.makeSound();




//used to parameter properties and avoid to repeted work
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
    public age: number
  ) {}

  public makeSound() {
    console.log(`The ${this.name} says ${this.sound} and age is ${this.age} year old`); //german shephard says ghew ghew and age is 12 year old
  }
}

const dog = new Animal('german shepard', 'dog', 'ghew ghew', 12);
dog.makeSound();

const cat = new Animal('persian', 'cat', 'mewo mewo', 6);
cat.makeSound();
