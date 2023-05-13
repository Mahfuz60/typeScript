//Genenric interface

interface CrushInterface<T> {
  name: string;
  husband: T;
}

const crush: CrushInterface<string> = {
  name: 'cary smith',
  husband: 'mahfuz',
};

interface HusbandSalary {
  name: string;
  salary: number;
}

const crush3: CrushInterface<HusbandSalary> = {
  name: 'cary smith',
  husband: {
    name: 'mahfuz',
    salary: 1000,
  },
};

//multiple object used generic interface

interface CrushInterface2<T, U =null> {
  name: string;
  husband: T;
  wife: U;
}

interface PersonInterface {
  name: string;
  age: number;
}

const crush4: CrushInterface2<PersonInterface, PersonInterface> = {
  name: 'kayt',
  husband: {
    name: 'mahfuz',
    age: 26,
  },
  wife: {
    name: 'cary',
    age: 30,
  },
};
