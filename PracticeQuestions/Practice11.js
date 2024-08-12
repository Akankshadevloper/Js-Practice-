/*Qs. For a given array of numbers, print the square of each value using the forEach loop.
*/

let nums = [2, 3, 4,5 ,6 ,7,8];

nums.forEach((num) => {
    console.log(num*num);
});


//or

let number = [1,3,4,5,6,7, 8];

let calSquare = (number) => {
    console.log(number*number);
};
number.forEach(calSquare);