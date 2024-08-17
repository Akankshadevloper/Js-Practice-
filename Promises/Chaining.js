function getData(dataId){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        }, 4000);
    })
}

/*getData(1).then((res)=>{
    console.log(res);
    getData(2).then(()=>{
        console.log(res);
    });
});*/


getData(1)
    .then((res)=>{
        return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    console.log("success");
});