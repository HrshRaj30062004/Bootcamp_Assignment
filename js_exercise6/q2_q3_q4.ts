interface User{
    id: number,
    name: string,
    address: string,
    age?: number;
}

class UserManager{
    private users: User[]= [];

    addUser(user: User): void{
        this.users.push(user);
    }

    removeUser(id: number): void{
        this.users.forEach(user=>{
            if(user.id == id){
                let x=this.users.indexOf(user);
                this.users.splice(x,1);
            }
        })
    }

    getUserbyId(id: number): User|undefined{
        for(const user of this.users){
            if(user.id===id) return user
        }
        return;
    }

    getAllUsers() : User[]{
        return this.users;
    }

    //Question 3
    getUser=(name: string="Guest"):string=>{
        return `Good Morning ${name}`;
    }
    //Question 4
    printUserDetails(user:User):void{
        const Usercopy={...user};
        const {id,name,address}=user;

        console.log("Id: ", id)
        console.log("Name: ", name);
        console.log("Address: ", address);

        console.log("Copied user object: ", Usercopy);
    }
}

const admin = new UserManager();

// admin.addUser({id:101,name: 'Harsh',address: 'Delhi'});
// admin.addUser({id:102,name: 'Chitra',address: 'Ghaziabad',age:30});
// admin.addUser({id:103,name: 'Vaibhav',address: 'Noida',age: 21});
// admin.addUser({id:104,name: 'Manas',address: 'Gurugram'});

// console.log(admin.getUserbyId(101));

// admin.removeUser(101);

// console.log(admin.getAllUsers());

// //Question 3 
// console.log(admin.getUser());

//Question 4
const user1: User={
    id:106,
    name:'Jitesh',
    address:'Mumbai'
}
const userID=admin.getUserbyId(102);
admin.printUserDetails(user1);


