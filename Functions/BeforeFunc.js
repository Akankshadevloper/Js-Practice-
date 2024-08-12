function sum1(x, y){
    s= x+y;
    //local variable -> scope
    //func parameters are like local variable of function with block of scope 
    console.log("before return ");
    return s;
    console.log("After return ");// if we return something there then after writting the return statement whatever we write will not be printed 
}
let val = sum1 (3,4);
// console.log(x); // it will give error because the scope of x is only in the block of code 
console.log(val);