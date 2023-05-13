//Alias Example

type User = {
  name: string;
  age: number;
};

// const userWithTypeAlias: User = {
//   name: 'Type Alias',
//   age: 100,
// };

type extendUser=User &{
  role:string
}

const userWithTypeAlias:extendUser = {
  name: 'Type Alias',
  age: 100,
  role:"Bekar"
};

// interface example
// [object ar jonne besio used hoie thake]

interface IUser {
  name: string;
  age: number;
}

// const userWithInterface:IUser={
//   name:"interface",
//   age:200
// }

//interfasce used as extend data similer work with aliss union & intersection

interface IExtendUser extends IUser {
  role: string;
}

const user2: IExtendUser = {
  name: 'Mahfuz',
  age: 2000,
  role: 'jobless',
};
