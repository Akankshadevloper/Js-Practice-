/**
Qs. Create 3 divs with common class name - "box". Access them & add some unique text to each
of them.
*/

let divs = document.querySelectorAll(".box");


let idx = 1 ;
for(div of divs ){
    div.innerText = `new Unique value ${idx}`;
    idx++;
}



// console.log(divs[1]);
// divs[0].innerText = "new Unique value ";