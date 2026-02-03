let calculator={
  num1:null,
  num2:null,

  read(){
    this.num1=Number(prompt("Enter the first number:"));
    this.num2=Number(prompt("Enter the second number:"));

    document.querySelector(".output").innerText="Numbers stored. Choose an operation";
  },

  add(){
    document.querySelector(".output").innerHTML = "Addition= " + (this.num1 + this.num2);
  },

  subtract(){
    document.querySelector(".output").innerHTML="Subtraction= " + (this.num1 - this.num2);
  },

  multiply(){
    document.querySelector(".output").innerHTML="Multiplication= " + (this.num1 * this.num2);
  }
};