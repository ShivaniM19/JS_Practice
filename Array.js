let modules=["html","css","bootstrap","dbms","php","js"];
document.write(modules[0]+" ");
modules[6]="Reactjs";
modules[0]="HTML";

// to add an element to last using push() method
modules.push("Server"); 

// to delete last element in array using pop() method
modules.pop(); 
for (const item of modules) {
    document.write(item+" ");
}
// foeEach function
const arr=[1,2,2,4,3,4,5];
arr.forEach(function(element){
    document.write(element+" ");
});

const ar=[2,4,6,8,10];
let printtElement=function(element){
    document.write(element+" ");

};
ar.forEach(printtElement);

let printElement=element=>{ document.write(element+" ");}
ar.forEach(printElement);

// map() method
let num=[2,4,1,3,2];
let squares=num.map(x=>x*x);

squares.forEach(function(element){
    document.write(element+" ");
});

let number=[1,2,3,4,5,6];
let even=number.filter(x=>x%2==0);
even.forEach(function(element){
     document.write(element+" ");
});