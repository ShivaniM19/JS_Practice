"use strict";

// rest aparameter: 
function calculateSum(...args){
    let sum=0;
    args.forEach(function(element){
        sum+=element;
    });
    return sum;
}

let s=calculateSum(3,4,2,5,3);
document.write(s+" ");

s=calculateSum(23,34.,1,2,32,33,3);
document.write(s+" ");

// spread operator: 
let odd=[1,3,5,7,9,11];
let even=[2,4,6,8,10,12];

let number=[...odd,...even];
number.forEach(function(element){
    document.write(element+" ");
})