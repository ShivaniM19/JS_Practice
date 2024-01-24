// Creating an object:
// 2.using new object():

let dog=new Object();

dog.breed="Golden retriever";
dog.color="Golden";
dog.height="2ft";
dog.weight="15kg";
dog.display=function () {
    document.write(this.breed+" "+this.color+" "+this.height+" "+this.weight);
    
};
document.write(dog.display()+" ");

// 3. function contructor
// instead of doing this:
let car1=new Object();
car1.make="Hyundai";
car1.model="i20";
car1.year=2014;
car1.display1=function(){
   document.write(this.make+" "+this.model+" "+this.year+" ");
};

document.write(car1.display1()+" ");

let car2=new Object();
car2.make="Honda";
car2.model="city";
car2.year=2005;
car2.display2=function(){
    document.write(this.make+this.model+this.year);
};

let car3=new Object();
car3.make="Tata";
car3.model="Nano";
car3.year=2012;
car3.display3=function(){
    document.write(this.make+this.model+this.year);
};

// do this:
function Car(make,model,year) {
    this.make=make;
    this.model=model;
    this.year=year;
    this.display=function(){
        document.write(this.make+ this.model + this.year);
    }
};

let car4=new Car("Hyundai","i20",2014);
let car5=new Car("Honda","city",2005);
let car6=new Car("Tata","Nano",2015);

document.write(car4.make+" ");
document.write(car5.model+" ");

// 4.using Classes

class Car1{
    constructor(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
    }
    display(){
        document.write(this.make+ this.model + this.year);
    };
};

let c1=new Car1("Hyundai","i20",2014);
let c5=new Car1("Honda","city",2005);
let c6=new Car1("Tata","Nano",2015);

document.write(c1.make+" ");
document.write(c1.model+" ");
document.write(c1.year+" ");
document.write(c1.display()+" ");

// accessing class property using for in loop:
for(let prop in c1){
    document.write(prop + ":"+ c1[prop]+"<br");
}