//normal function
function addNumber(num1: number, num2: number): number {
  return num1 + num2;
}

addNumber(10, 20);

//Arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;


// callback function

const numberArr=[4,3,5,7,6,10];

const newArray=numberArr.map((element:number)=>element*element);

//object to used function

const user:{
  name:string,
  balance:number,
  // addBalance(money:number):number
  addBalance(money:number):void
}={
  name:"Khairul Islam",
  balance:100,
  addBalance(money:number){
    // return this.balance+money;
    // console.log(`My New Balance is:${this.balance+money}`);
  }

}


//function used default parameter

function sumNum(num1:number,num2:number=10){
  return num1+num2;
}
sumNum(20,30);

//spread operator

const myFriend=["kauser","chamak","khairul","rafsan","hridoy","dolar"];
const newFriend=["nayem","ovi","monir","nazmul","sadia"];

myFriend.push(...newFriend);
console.log(myFriend);


// Rest Operator

const greetingFriend=(...friends:string[]):void=>{
  friends.forEach(friend=>console.log(`Hello my dear friend ${friend}`));
  // friends.forEach(friend=>console.log(`Hello my dear friend ${friend.toLocaleUpperCase()}`));

}

greetingFriend("khairul","mahfuz","kauser","nayem","hridoy","rafsan","dolor");

//array and object destructuring

const myBestFrind={
  fullName:"Ahemd Hridoy",
  age:26,
  location:"Itally",
  isMarried:true
}
const {fullName:myFullName,age:myAge,location:myLocation}=myBestFrind;
console.log(`Name:${myFullName},\n Age:${myAge},\n Location:${myLocation}`);
