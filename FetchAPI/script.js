const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");



const getFact = async () => {
    console.log("getting data ...... ");
    let response = await fetch(URL);
    console.log(response);// JSON FORMATE 
    let data = await response.json();
    factPara.innerText = data[1].text;
};


//Promise Chaining 
/*function getFact() {
        fetch(URL)
        .then((response)=> {
            return response.json();
        })
        .then((data)=> {
            console.log(data);
            factPara.innerText = data[1].text;
        });
}*/

btn.addEventListener("click", getFact);