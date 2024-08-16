const employee = {
    calcTax() {  // we can define function in two type 1st
        console.log('tax rate is 10%');
    },

    // calcTax2 : function () {
    //     console.log('tax rate is 20%'); //2nd type 
    // }
};

const karanArjun = {
    salary : 50000,
    calcTax() {
        console.log('tax rate is 20%');
    }
};

karanArjun.__proto__ = employee;

