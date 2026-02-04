function greet(greeting){
    console.log(greeting,this.name);
}

const person1={name:"Abhishek"};
const person2={name:"Anil"};

greet.call(person1, "Hello");
greet.call(person2,"Hey");

//here bind fixes this to person1
const boundGreet=greet.bind(person1);

boundGreet("Hi");

/*now when call() tries to change this it can't becauseb
bind() has higher priority and this is fixed t person1*/

boundGreet.call(person2,"yo");