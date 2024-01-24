let el=document.getElementById("abc") ;
alert(el.innerHTML);
// el.style.color="red";
el.onclick=function changeContent(){
    el.innerHTML="this is some thing in innerhtml";
    el.style.color="red";
    }
// el.onclick=function(){
//     alert(15+27);
//     // alert("Element is clicked");
// }
// let els=document.getElementsByClassName("xyz");
// let els1=document.getElementsByTagName("p");
// let els2=document.querySelectorAll(".xyz");

  