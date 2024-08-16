/*let promise = new Promise((resolve, reject) => {
    console.log("I am a promise ");
    //resolve("success");
    reject("Something is wrong");

});*/

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log("data", dataId);
            //resolve("success"); if we don't able to sent the data then the api gives us rejected message 
            reject("error");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    })
}