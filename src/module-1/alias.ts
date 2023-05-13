//Declure to Alias type
type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
  university: string;
};

const crush1: CrushType = {
  name: 'carry smith',
  age: 23,
  profession: 'Software Engineer',
  address: 'united state',
  university: 'starmford university',
};
const crush2: CrushType = {
  name: 'jack will',
  age: 22,
  profession: 'DevOps Engineer',
  address: 'united kingdom',
  university: 'harbard university',
};
// console.log(crush1);
// console.log(crush2);

//Boolean Type Alias
type CrushMarriedStatus = boolean;
const crushMarried: CrushMarriedStatus = false;
// console.log(crushMarried);

//String Type Alias
type CourseType = string;
const courseName: CourseType = 'Programming Hero Next Level 2.0 Web Development Course';
// console.log(courseName);

//operational fuction used to alias

type OperationType = (x: number, y: number) => number;

const calculator = (
  number1: number, //30
  number2: number, //10
  operation: OperationType //(x, y) => x + y)  //(30,10)=>30+10
) => {
  return operation(number1, number2);
};

// console.log(calculator(30, 10, (x, y) => x + y));
// console.log(calculator(30, 10, (x, y) => x - y));
// console.log(calculator(30, 10, (x, y) => x * y));
// console.log(calculator(30, 10, (x, y) => x / y));
