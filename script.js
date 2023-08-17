// box = document.querySelector("div");

// function byChange(color){
//     box.style.background =color;
// }






const dynamicText = document.querySelector("h1 span");
const word =["Love","like Art","the Future","Everything"];

var wordIndex =0;
var charIndex =0;
var isDelecting = false;

const typeEffect= () =>{
    var currentWord= word[wordIndex];
    var currentChar = currentWord.substring(0,charIndex);
    dynamicText.textContent=currentChar;

    dynamicText.classList.add("stop");

    // Add the text=========== or Type
    if(!isDelecting && charIndex < currentWord.length){
        // if the condition is true type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    }
    // Delecte the Text=========
    else if(isDelecting && charIndex > 0){
         // if the condition is true remove the next character
        charIndex--;
        setTimeout(typeEffect, 100);
    }
    else{
        // word is deleted switch to the next word
        isDelecting = !isDelecting;
        dynamicText.classList.remove("stop");
        wordIndex =!isDelecting ?(wordIndex +1) % word.length: wordIndex;
        setTimeout(typeEffect, 1200);
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