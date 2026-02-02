function checkPalindrome(event){
  event.preventDefault();

  var str = document.getElementsByClassName("palindrome")[0].value;
  var reversed= str.split("").reverse().join("");

  if(str==reversed){
    alert(str+ " is Palindrome");
  }else{
    alert(str + " is not Palindrome");
  }
}