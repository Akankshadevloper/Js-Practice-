// async function hello() {
//     console.log('Hello, world!');
// }

//Async await code 
function api() {
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log("weather data");
            resolve(200);
        }, 2000)
    });
}

async function getWeatherData() {
    await api();//1st call
    await api();//2nd call
} 


//GetData
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Data fetched", dataId);
            resolve("success");
        }, 2000);
});
}

async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
}




//Promise code 
console.log("getting data1....");
getData(1)
    .then((res) => {
        console.log("getting data2 ......");
        return getData(2);
    })
    .then((res) => {
        console.log("getting data3......");
        return getData(3);
    })
    .then((res) => {
        console.log("getting data4......");
    });













//CallBack hell code 
getData(1,() => {
    console.log("getting  data2 ......");
    getData(2, () => {
        console.log("getting data3 .......");
        getData(3, () => {
            console.log("getting data4 .........");
            getData(4);
        });
    });
});
