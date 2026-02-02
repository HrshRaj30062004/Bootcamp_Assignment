let obj1 = {
  name: "Lobster",
  age: 22
};

let obj2 = { ...obj1 };

document.querySelector(".original").innerText=
"Name: "+ obj1.name +", Age: " + obj1.age;

document.querySelector(".copied").innerText=
"Name: "+ obj2.name +", Age: " + obj2.age;

