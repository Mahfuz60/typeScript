//Union-Intersection

type NoobDeveloper={
  name:string;
};

// type JuniorDeveloper={
//   expertise:string[],
//   experience:string,
//   level:number

// }

// AND used main this is intersection
type JuniorDeveloper=NoobDeveloper &{
  expertise:string,
  experience:string,
  level:number

}

//OR used main this is union
const newDeveloper:NoobDeveloper|JuniorDeveloper={
  name:"mahfuz alam",
  expertise:"javascript",
  experience:"1 year",
  level:1

}
console.log(newDeveloper);



type NextLevelDeveloper=JuniorDeveloper &{
  leadershipExperience:number,
  teamPlayer:boolean
}

const developer:NextLevelDeveloper={
  name:"Ahmed Hridoy",
  experience:"Typescript",
  expertise:"2.5 Year",
  level:2,
  leadershipExperience:2,
  teamPlayer:true


}
console.log(developer);