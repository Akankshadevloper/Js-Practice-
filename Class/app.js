class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand =  brand;
        this.milage = mileage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    // setBrand(brand) {
    //     this.brandName =  brand;
    // } we can directly write this inside a constructor 
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
// fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus", 20);
// lexus.setBrand("lexus");
console.log(lexus);