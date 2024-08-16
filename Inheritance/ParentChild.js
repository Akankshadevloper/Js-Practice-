class Parent {
    hello() {
        console.log('Hello from Parent');
    }
}

class Child extends Parent {

}
let obj = new Child();




class Person {  //Parent Class 
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }

    // sleep() {
    //     console.log("sleep");
    // }
    // work() {
    //     console.log(" do nothing ");
    // }
}


class Engineer extends Person{  //Child Class 
    constructor(name) {
        super(name); //to invoke parent class constructor 
        
    }
    work() {
        console.log("solve problems, build something ");
    }
}

// class Doctor extends Person{
//     work() {
//         console.log("Treat Patients");
//     }
// }



let engobj = new Engineer("akanksha" );