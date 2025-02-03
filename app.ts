/*const person:{
    name:string;
    age:number;
  hobbies: string[]
  role:[number,string]
} = {
    name: 'Precious',
    age: 26,
   hobbies: ['sporting','cooking'],
   role: [2,'author']
};

person.role.push('admin');
let favoriteActivities :string[];
favoriteActivities = ['sporting'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby)
}*/
enum Role {ADMIN,READ_ONLY, AUTHOR}
const person ={
    name: 'Precious',
    age: 26,
   hobbies: ['sporting','cooking'],
   role: Role.ADMIN
}

if(person.role===Role.ADMIN){
    console.log('is admin')
}