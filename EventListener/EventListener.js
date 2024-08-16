//adding eventListner
btn1.addEventListener("click", () => {
    console.log("button 1 was clicked - handler 1 ");
    
});

btn1.addEventListener("click", () => {
    console.log("button 1 was clicked -  handler 2");
});




const handler3 = () => {
    console.log("button 1 was clicked -  handler 3");
};
btn1.addEventListener("click",handler3);
//The callback reference should be same to remove 





btn1.addEventListener("click", () => {
    console.log("button 1 was clicked -  handler 4");
});





//Removing eventListener
//I want to delete the third event listener 
btn1.removeEventListener("click", handler3);