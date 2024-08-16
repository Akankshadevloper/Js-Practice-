let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("Button 1 clicked");

    let a =25;
    a++;
    console.log(a);
};


let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log("Mouse over div");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

let btn2 = document.querySelector("#btn2");

btn2.onclick = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};