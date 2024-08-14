// let div = document.querySelector("div");

// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple ";
// div.style.visibility = "hidden"

// div.style.fontSize = "26px";

// div.innerText ="Hello!";


let newBtn = document.createElement("button");
newBtn.innerText = "click me! ";//creation is completed 
console.log(newBtn); // we have created the button but now we have to show it in the screen 

//second one is add 


let div = document.querySelector("div");
div.prepend(newBtn); // append ,prepend , before after 


/**let newHeading = document.createElement ("h1"):
newHeading. innerHTML = "<i>Hi, I am new!</i>";
document. querySelector ("body"). prepend (newHeading) it
 */

let para = document.querySelector("p");
para.remove();
