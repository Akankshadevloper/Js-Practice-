let arr = [1,2,3,4,5];


arr.forEach(function printVal(val){ //value at each index
    console.log(val);
});


let city = ["pune ", "mumbai", "Delhi"];

city.forEach((val , idx , arr) => {
    console.log(val.toUpperCase(), idx , arr);
});