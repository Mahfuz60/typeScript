//data type depends to the another type of data

type a1 = string;
type a2 = a1 extends string ? string : null;

//nested conditonal type
type d1 = number;
type d2 = d1 extends string ? string : null;
type d3 = undefined;
type d4 = number;

type D = d1 extends null ? null : d3 extends number ? number : d4 extends null ? null : never;

// example

type Sheikh = {
  wife1: string;
  wife2: string;
};

type checkedProperty<T> = T extends { wife2:string } ? true : false;

type checkedWife = checkedProperty<Sheikh>;


// another example
type BestFrind="khairul"|"Ahmed Hridoy"|"Dolar";

type RemoveBestFriend<T,K> =T extends K?never:T;

type CurrentBestFriend=RemoveBestFriend<BestFrind,"Dolar">;