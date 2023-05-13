

const age:number=25;

// if(age>=18){
//   console.log("yes ,you are access this");
// }else{
//   console.log("You didnot access it!");
// }

// ternery operator

const isAdult=age>=18? "Yes":"No";
// console.log(isAdult);

//Nullish Coeslancing Operator
//null and undefined [only work]

const isAuthenticatedUser=null;

const userName=isAuthenticatedUser ??"Guest User";
console.log(userName);


type Manush={
  name:string,
  age:number,
  address:{
    city:string,
    road:string,
    home?:string
  }
}

const manush1:Manush={
  name:"ahmed hridoy",
  age:30,
  address:{
    city:"jatrabari",
    road:"25",
    // home:"midJatrabari"
  }
}

const home=manush1?.address?.home??"No Home"; //default No Home
console.log({home});







