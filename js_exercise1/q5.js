let employees = [
  { name: "Amit", age: 25, salary: 6000, dob: "1999-05-10" },
  { name: "Riya", age: 22, salary: 4000, dob: "2002-03-15" },
  { name: "Karan", age: 28, salary: 8000, dob: "1996-08-20" },
  { name: "Neha", age: 21, salary: 900, dob: "2003-01-12" }
];


const output=document.querySelector(".output");

//Button 1
function showAll(){
  output.textContent="ALL EMPLOYEES \n " + JSON.stringify(employees,null,2); 
}


//Button 2
function showHighsalary(){
  var highSalary = employees.filter(emp => emp.salary > 5000);
  output.textContent="EMPLOYEES WITH SALARY > 5000 \n " + JSON.stringify(highSalary,null,2);
}


//Button 3
function groupByAge(){
  var groupedByAge = employees.reduce((group, emp) => {
  group[emp.age] = group[emp.age] || [];
  group[emp.age].push(emp);
  return group;
}, {});

  output.textContent="EMPLOYEES GROUPED BY AGE\n " + JSON.stringify(groupedByAge,null,2);

}



//Button 4

function increment(){
  let updatedEmployees = employees
  .filter(emp => emp.salary < 1000 && emp.age > 20)
  .map(emp => ({
    ...emp,
    salary: emp.salary * 5
  }));

  output.textContent="Increment Salary 5x (salary<1000 & Age>20) \n " + JSON.stringify(updatedEmployees,null,2);

}






