const read=require('readline-sync')
const options=["Addition","Subtraction","Division","Multiplication"]
const choose=read.keyInSelect(options,"choose any option")
const num1=read.questionFloat("enter first number")
const num2=read.questionFloat("enter secound number")



switch(choose){
    case 0:console.log(num1+num2);
    break;
    case 1:console.log(num1-num2);
    break;
    case 2:console.log(num1/num2);
    break;
    case 3:console.log(num1*num2);
    break;
    
    
}