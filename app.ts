const person:{
    name:string;
    age:number;
  hobbies: string[]
} = {
    name: 'Precious',
    age: 26,
   hobbies: ['sporting','cooking']
};
let favoriteActivities :string[];
favoriteActivities = ['sporting'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby)
}