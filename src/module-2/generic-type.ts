const rollNumber1: number[] = [10, 15, 20];
const rollNumber2: string[] = ['10', '15', '20'];

// similer to write with angle braket
const rollNumber11: Array<number> = [10, 15, 20];
const rollNumber22: Array<string> = ['10', '15', '20'];

const userNameWithRollNumber: Array<{ name: string; roll: number }> = [
  {
    name: 'Mr. Shahin',
    roll: 101,
  },
  {
    name: 'Mr. Monirazzaman',
    roll: 102,
  },
];

//Generic type used

type GenericArray<T> = Array<T>; //T main type ,T used in best practise
const rollNumber10: GenericArray<number> = [10, 15, 20];
const rollNumber20: GenericArray<string> = ['10', '15', '20'];

type NameAndRoll = { name: string; roll: number };

const userNameWithRollNumber1: GenericArray<NameAndRoll> = [
  {
    name: 'Mr. Shahin',
    roll: 101,
  },
  {
    name: 'Mr. Monirazzaman',
    roll: 102,
  },
];

//Generic with tupple[main one more value used]

type GenericTupple<X, Y> = [X, Y];

const relation: GenericTupple<string, string> = ['Mahfuz', 'asmaner pori'];

