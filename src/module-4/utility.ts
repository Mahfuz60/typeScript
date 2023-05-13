//Pick [amar ja lagbe segolo access nibo and used korbo]

interface Persons1 {
  name: string;
  email?: string;
  contactNo: number;
}

type email = Pick<Persons1, 'email'>;

type contact = Pick<Persons1, 'email' | 'contactNo'>;

// Omit  [amr ja lagbe na segolo fele die baki glo nie kaj korbo ]
type User1 = Omit<Persons1, 'contactNo'>;

//Partial and Required

//To make all the properties be optional type

type Optional = Partial<Persons1>;

//all of propertis need it
type properties = Required<Persons1>;

//Readonly

const person5: Readonly<Persons1> = {
  name: 'Mahfuz',
  email: 'ABC@gmail.com',
  contactNo: 122334556,
};

// Record Type
// type myObj = {
//   a: string;
//   b: string;
//   c: string;
// };

// using index signature
// type myObj = {
//   [key: string]: string;
// };

//Record utility
// type myObj = Record<string, string>;
type myObj = Record<'a' | 'b' | 'c', string>;

const obj: myObj = {
  a: '1',
  b: '2',
  c: '3',
};
