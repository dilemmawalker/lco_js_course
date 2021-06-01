// console.log("connected!");

// let h=document.createElement("h5");
// let val=document.createTextNode("Hello world!");
// h.appendChild(val);
// document.querySelector('p').appendChild(h);

document.querySelector("#add").addEventListener("click",additem);
document.querySelector("#remove").addEventListener("click",removeitem);

function additem(){
    console.log("add button clicked");
}

function removeitem(){
    console.log("remove button clicked");
}