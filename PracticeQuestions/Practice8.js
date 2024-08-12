/*Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
C. Add Amazon at the end
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);


/*let val = companies.shift();//(a)
console.log(val);*/

/*let val = companies.splice(2,1,"ola");
console.log(val);*/    //

let val = companies.push("Amazon");
console.log(val); //(c)
