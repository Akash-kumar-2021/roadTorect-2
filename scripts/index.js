// My access key:"DqtFgXDBvo4c-YNmHhaRk5djZ-Fi3NImE8rw6aQRsOU"
// My Secret key:"jkBMkkXUIU5FXO84GQXtHoAlDUl-IV115HZfkxFFL50"

// My Url:"https://api.unsplash.com/search/photos/?query=$%7Bvalue%7D&per_page=20&client_id=DqtFgXDBvo4c-YNmHhaRk5djZ-Fi3NImE8rw6aQRsOU"


// import the navbar 

import { navbar } from "../components/navbar.js";
let n = document.getElementById("navbar");
   n.innerHTML = navbar();


//    fetch the data
const API = "DqtFgXDBvo4c-YNmHhaRk5djZ-Fi3NImE8rw6aQRsOU";

// import seachImages for fetch.js

import {searchImages,append} from "./fetch.js" ;

// this is serach bar enter click
let search = (e) => 
{
    if(e.key == "Enter")
    {
        let value = document.getElementById("query").value ;
        searchImages(API,value).then((data) =>
        {
            console.log(data);
            let container = document.getElementById("container");
            container.innerHTML = null;
            append(data.results,container)
        });
      
    }
};

document.getElementById("query").addEventListener("keydown",search);


// Categories click event

let categories = document.getElementById("categories").children;

console.log(categories);
function  cSearch()
{
    console.log(this.id);
        searchImages(API,this.id).then((data) =>
        {
            console.log(data);
            let container = document.getElementById("container");
            // container.innerHTML = null;
            append(data.results,container)
        });
};

// In the below for loop as like forEach type

for(let el of categories)
{
    el.addEventListener("click",cSearch);
}











// fetch the data in normal ways

// let searchImages = async () => 
// {
//     let value = document.getElementById("query").value ;
//     try{
//         let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}per_page=20&client_id=${API}`);

//         let data = await res.json();
//         console.log(data)
//     }
//     catch(err)
//     {
//         console.log("Error:",err)
//     }

// };