//number array to string array

const numberArray = [1, 2, 3, 4, 5];
const stringArray = numberArray.map((number) => number.toString());
console.log(stringArray);

type AreaNumber = {
  height: number;
  width: number;
};

const rectangularArea: AreaNumber = {
  height: 12,
  width: 10,
};
rectangularArea.width = 12;

console.log(rectangularArea);


//read only
type AreaReadOnly={
  readonly height:number;
  readonly width:number;

}

const rectangularArea2:AreaReadOnly={
  height:15,
  width:20


}
// rectangularArea2.height=50;
console.log(rectangularArea2)


//mapping to keyOf operator

type Volume={
  height:number,
  width:number,
  depth:number
}

type Area<T> ={
  // [key in keyof Volume]:Volume[key];
  [key in keyof T]:T[key];

  
}

const area1:Area<{height:number,width:number}> ={height:30,width:40};
