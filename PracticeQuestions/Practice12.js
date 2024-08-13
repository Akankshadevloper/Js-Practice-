let arr = [1,5,8,19];

const output = arr.reduce((prev,curr) => {
    return prev > curr? prev : curr;
});

console.log(output);