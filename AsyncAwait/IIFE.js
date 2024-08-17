function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Data fetched", dataId);
            resolve("success");
        }, 2000);
});
}



(async function() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3.....");
    await getData(3);
})();