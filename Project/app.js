let Data = "secret information";


class User {
    constructor(name , email){
        this.name = name;
        this.email = email;
    }

    viweData() {
        console.log(" data = ", Data)
    }
}


class Admin extends User{
    constructor(name, email){
        super(name,email);
    }
    editData() {
        Data = "some new value";
    }
}




let student1 = new User("akanksha", "akanksha4211@gmail.com");
let student2 = new User("bibek", "bibek1215@gmail.com");



let teacher1 = new User("Dean", "dean@college.com");

let admin1 = new Admin("admin","admin@college.com")
