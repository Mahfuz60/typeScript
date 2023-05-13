//common clases used

class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `This ${this.name} people daily sleeping time is ${hours}`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

const student1 = new Student('Mr. Been', 20, 'North Velly,USA');

class Teacher extends Person {
  designation: string; //different

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(numOfClasses: number): string {
    //different
    return `The Teacher name is ${this.name} and he is daily ${numOfClasses} classes takes it `;
  }
}

const teacher1 = new Teacher('Mr. Smith', 45, 'Califonia,USA', 'Department of Head CSE');
