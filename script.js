// box = document.querySelector("div");

// function byChange(color){
//     box.style.background =color;
// }






const dynamicText = document.querySelector("h1 span");
const word =["Love","like Art","the Future","Everything"];

const wordIndex =0;
const charIndex =0;
const isDelecting = false;

const typeEffect= () =>{
    const currentWord= word[wordIndex];
    const currentChar = currentWord.substring(0,charIndex);
    dynamicText.textContent=currentChar;
    if(!isDelecting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 200);
    }
}
typeEffect();


// var count =0
// var resultt="";

// function ggo(){
// var result=document.getElementById('mano');
// result.repeat(5);
// }
// ggo();

// var reminder = "Drink my water";
// console.log(reminder.repeat(5));
// var index =3;
// var result="EEEEE";
//  while(index<10){
//     main = result + reminder;
//     result += reminder;
//     index ++;
//     console.log(result);
//  }



// var p1, p2;
// function myFun(p1,p2){
   
//     return p1 * p2 ;
    
// }
// document.querySelector(".demo").innerHTML="This is "+ myFun(2,3) ;

// function myFun(a, b)
// var p1 =2;
// var p2 =8;

// var go= p1 *p2;

// function Myddd(){
//     document.querySelector(".demo").innerHTML="This is" + "" + go;
// }
// Myddd();