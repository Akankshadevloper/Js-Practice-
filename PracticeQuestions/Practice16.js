/*
Q5. Create a new button element. Give it a text "click me", background color of red & text color
of white.
Insert the button as the first element inside the body tag.
 */


let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn)