function Person(name,age,address){
  this.name=name;
  this.age=age;
  this.address=address;
}

function Employee(employeeId,competency){
  this.employeeId=employeeId;
  this.competency=competency;
}

function Developer(designation,salary){
  this.designation=designation;
  this.salary=salary;
}

Employee.prototype= new Person('Harsh',21,'Delhi');

Developer.prototype= new Employee('101','JS');

var Developer = new Developer('Software Developer', 150000);
console.log(Developer.name,Developer.age,Developer.address);
console.log(Developer.employeeId,Developer.competency)
console.log(Developer.designation,Developer.salary);