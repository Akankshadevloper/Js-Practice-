
fullname = "Akanksha ";
FullName = "Bibek Behera ";
console.log(fullname);
console.log(FullName);

//fullname and FullName are different 
//variable  only accept letter , digit , _ and $ sign only it wonn't accept even a space .
//only letter , digit underscore and $ should be the first character 
//reserved words cannot be variables names...

Console = "Abhi";
console.log(Console);
//only console is a reserved keyword Console is not a reserved keyword in javascript

/*let name = "Abhinash";
console.log(name);*/

let age = 24
console.log(age);





//BLOCK SCOPE 
{
    let a = 5;
    // let a = 4; we cannot redeclare it here so we will create another block
    console.log(a);
}

{
    let a = 4;
    console.log(a);
}

let x = BigInt("123");
let y = Symbol("Hello!");






//Object declaration 
const student = {
        name : "Akanksha" ,
        age : 23 ,
        marks : 90.5 ,
        hobbies : ["reading" , "swimming" , "dancing"],
        isPass : true ,
};

//new Value assiging in Object 
student.name = "Akanksha Singh";  //OR
student["age"] = student["age"] + 1;


console.log (student.age);
console.log(student["name"]);