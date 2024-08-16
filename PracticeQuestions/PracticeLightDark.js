let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "Light";


modeBtn.addEventListener("click", () => {
    // console.log("U r trying to change mode ");
    if(currMode == "Light"){
        currMode = "Dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "Light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});