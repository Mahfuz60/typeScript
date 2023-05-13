//Arrow function
const arrayFunc1 = (param: string): string[] => {
  return [param];
};

const result1 = arrayFunc1('bangladesh');

//generic function
const arrayFunc2 = <T>(param: T): T[] => {
  return [param];
};
const result2 = arrayFunc2<string>('bangladesh');
const result3 = arrayFunc2<number>(1000000001);
const result4 = arrayFunc2<boolean>(true);

type NameAndCapital = {
  name: string;
  capital: string;
};
const result5 = arrayFunc2<NameAndCapital>({ name: 'bangladesh', capital: 'dhaka' });


//speed operator

const crushs1="will smith";
const myInfo={
  name:"mahfuz",
  age:30,
  salary:100000000000
}

const newData={...myInfo,crushs1};

//access to function
const crushs2="will jan";
const myInfo2={
  name:"mahfuz alam",
  age:30,
  salary:1000000
}
const addMeInMyCrushMind=<T>(myInfo2:T)=>{
  const crushs2="will smith";
  const updateData={...myInfo2,crushs2};
  return updateData;

}

const result6=addMeInMyCrushMind(myInfo2);
