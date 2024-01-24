"use strict";

//if else if
let a=10;
if(a%2==0){
    document.write("even number");
}else if(a%2!=0){
    document.write("odd number");

}
document.write("Thank you");

// switch case
let x=20;
let y=10;
let op="*";
switch (op) {
    case "+":
        document.write(x+y);
        break;

    case "-":
        document.write(x+y);
        break;
    case "*":
        document.write(x+y);
        break;
    case "/":
        document.write(x+y);
        break;
    default:
        document.write("enter correct operator");
        break;
}