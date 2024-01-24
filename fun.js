"use strict";
// function get_max(a,b) {
//     if(a>b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }

// let max=get_max(5,10);

// function make_changes(a,b,c){
//     a=5;
//     b=[2,1,3,4,2];
//     c[0]=8;

// }

// let x=4;
// let y=[2,4,3,4,3,5];
// let z=[2,5,2,3,4];
// make_changes(x,y,z);
// document.write(x,y,z);


// // anonymous function

//  let multiply=function(x,y){
//     let p=x*y;
//     return p;
// };

// let add=function(x,y) {
//     let s=x+y;
//     return s;
// }

// let a=5,b=20;
// function action(x,y,z) {
//     let r=z(x,y)
//     return r;
// }
// let r=action(a,b,add);
// document.write(r);


// arrow function 1.
let multiply1=(a,s)=>{
    let p=a+s;
    return p;
}
let q=multiply1(2,6);
document.write(q);

// 2.
let multiply2=(x,y)=>x*y;
let q1=multiply2(2,17);
document.write(q1);

// 3.
let multiply3=x=>x*x;
let b=multiply3(4);
document.write(b);
