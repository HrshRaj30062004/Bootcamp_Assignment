function calculateSI(event){
  event.preventDefault();

  var principal=parseFloat(document.getElementsByClassName("principal")[0].value);
  var rate=parseFloat(document.getElementsByClassName("rate")[0].value);
  var time=parseFloat(document.getElementsByClassName("time")[0].value);

  var simpleInterest= (principal*rate*time)/100;

  alert("Simple Interest is: Rs." + simpleInterest);
}