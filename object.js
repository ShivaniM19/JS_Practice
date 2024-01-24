// Object:
// Creating an object:
// 1.using object initializer:
let dog={
    breed:'Golden retriever',
    height:'4ft',
    age:2,
    display:function(){
        document.write(this.breed+" "+this.height+" "+this.age+" ");
    }
};

// accessing object property using dot operator
document.write(dog.breed+" ");
document.write(dog.height+" ");
document.write(dog.display()+" ");

// assigning new property
dog.weight="20kg";
document.write(dog.weight+" ");

// assigning new value to propaerrty
dog.age="4";
document.write(dog.age+" ");

// accessing object property using square bracket
 document.write(dog['breed']+" ");
 document.write(dog['height']+" ");
 document.write(dog['age']+" ");

// assigning new property and assigning new value to existing property 
 dog['breed']="Dalmatian";
 dog['color']="white with black spot";
 document.write(dog['breed']+" "+ dog['color']+" ")