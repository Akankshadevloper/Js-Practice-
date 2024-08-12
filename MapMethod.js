let nums = [66,68,90];

nums.map((val) => {
    console.log(val);
});

//duplicate values 
let num = [66,68,90,66,68,90];
let newArr = num.map((val)=> {
    return val*val;
});

console.log(newArr);

//For each is only used when we have to normally do something and map is used when we have use value to create a new array 