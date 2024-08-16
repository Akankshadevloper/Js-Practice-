function getData(dataId , getNextData){
    setTimeout(() => {
        console.log("data" , dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}


//CallBack Hell 
getData(1, () => {
    console.log("getting data2 .... ");
    getData(2, () =>{
        console.log("getting data3 .... ")
        getData(3);
});
});

//data 1 
//data 2
//data 3