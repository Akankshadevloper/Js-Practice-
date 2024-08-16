function sum (a, b) {
    console.log(a+b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(1, 2, sum);



const hello = () => {
    console.log('Hello, world!');
};

setTimeout(hello, 3000);