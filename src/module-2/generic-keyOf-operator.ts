type PersonType={
  name:string,
  age:number,
  address:string
}

//Manully work
type newType="name"|"age"|"address";
const person1:newType="name"


//using keyOf Operator
type newTypeUsingKeyOf=keyof PersonType;
const persons:newTypeUsingKeyOf="address"



function getProperty<X,Y extends keyof X>(obj:X,key:Y){
  obj[key];

}

const property=getProperty({name:"Mr.X",age:100},"age");