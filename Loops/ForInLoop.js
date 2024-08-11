// we use for in loop for object and array 
let student = {
    name : "Bibek Behera",
    age: 22,
    cgpa: 8.3,
    isPass: true,
};

for(let key in student){
    console.log("key =", key, "value=", student[key]);
}