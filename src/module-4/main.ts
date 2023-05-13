// import { addNum as addNumTwo, subtract } from './module';
// import * as Methods from './module';
// import Methods from './module';
// import adds from './utils/add';
// import subtract from './utils/subtract';
// import multiply from './utils/multiply';
// import averge from './utils/average';
// import divide from './utils/divide';

import Methods from './utils/index';

// const addNum = (num1: number, num2: number, num3: number): number => {
//   return num1 + num2 + num3;
// };

const res1 = Methods.adds(2, 5);
const res2 = Methods.subtract(20, 15);
const res3 = Methods.multiply(5, 4);
const res4 = Methods.averge(10, 20);
const res5 = Methods.divide(10, 4);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
