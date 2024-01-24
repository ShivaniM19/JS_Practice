"use strict";

//while
let n=1;
while(n<=10){
    document.write(n*2+" ");
    n++;
}

// do while
let j=0;
do{
    document.write(j+2+" ");
    j++;
}while(j<=10);


//for of
const arr=[2,3,1,3,4,5,10];
for(let element of arr){
    document.write(element+" ");
}

//for in
const obj={george:2001,barack:2009,donald:2017};
for(let name in obj){
    document.write(name+" got selected in "+ obj[name]+" ");
}
