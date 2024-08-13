/*Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+.
*/

let marks = [87,, 99, 98, 64, 49 , 60 , 39];

let toppers = marks.filter((val)=>{
    return val> 90;
});

console.log(toppers);