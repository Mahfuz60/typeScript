
// type MandotoryType={name:string,age:number,salary:number};
interface MandotoryInterface{name:string,age:number,salary:number};

const personInfoDetail=<T  extends MandotoryInterface>(personInfo:T)=>{   //used generic constrain
  const personWife="will smith";
  const updateData={...personInfo,personWife};
  return updateData;

}


type personInfoType={
  name:string,
  age:number,
  salary:number,
  role:string,
  isActive:boolean

}

const personInfo:personInfoType={
  name:"ahmed redoy",
  age:27,
  salary:100000,
  role:"hardware and software engineer",
  isActive:true
}


const personData=personInfoDetail<personInfoType>(personInfo);

