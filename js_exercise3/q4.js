//arguments.length
function demo(a,b){
    console.log(arguments.length);
}

demo(10,20,30);

//arguments[index]
function demo(){
    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}

demo("JS","Html",1);
demo("React",2,3,4,5);

//arguments.callee
function factorial(num){
    if(num<=1){
        return 1;
    }
    return num*arguments.callee(num-1);
}

console.log(factorial(5));