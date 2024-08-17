function asyncFunc1() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data1 ");
            resolve("success");
        }, 5000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data2 ");
            resolve("success");
        }, 5000);
    });
}


/*console.log("fetching data 1");
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log(res);
});


console.log("fetching data 2");
let p2 = asyncFunc2();
p2.then((res)=>{
    console.log(res);
}); // Here the data is printed at the same time 
//what we want to do is to print data one by one */


console.log("fetching data1.......");
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log("fetching data2...");
    let p2 = asyncFunc2();
    p2.then((res)=>{});
});

//or 
/*console.log("fetching data1.....");
asyncFunc1().then((res) => {
    console.log("fetching data2...");
    asyncFunc2().then((res)=>{ });
});*/

