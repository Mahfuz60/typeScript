let anything:any;
anything="Next Level Course";
(anything as string).length;
<string>anything.length;


function KgToGram(param:string|number):string|number|undefined{
  if(typeof param==="string"){
    const value=parseFloat(param)*1000;
    return `The Converted result is ${value} gm`;
  }if(typeof param==="number"){
    const value=param*1000;
    return value;
  }
}

const resultToNumber=KgToGram(100) as number;
const resultToString=KgToGram(100) as string;

type CustomErrorType={
  message:string;
}

try {
  
} catch (error) {
  console.log((error as CustomErrorType).message);
  
}