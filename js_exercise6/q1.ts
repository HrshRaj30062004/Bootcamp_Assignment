interface User{
    id: number,
    name: string,
    email: string,
    age?: number;
}

const user1: User = {
    id:101,
    name:'Harsh',
    email:'xyz@gmail.com',
    age:21,
}

console.log(user1);