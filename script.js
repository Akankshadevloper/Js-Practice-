console.log("Hello");
// prompt("Hiii Everyone");

//DOM 
let button = document.getElementById("myButton");
console.dir(button);


let heading = document.getElementsByClassName("myClass");
console.dir(heading);
console.log(heading);


let parahs = document.getElementsByTagName("p");
console.dir(parahs);


// DOM Manipulation Query Selector 

let firstEle = document.querySelector("p");
console.dir(firstEle);

let allEle = document.querySelectorAll("p");
console.dir(allEle);