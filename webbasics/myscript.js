// console.log("hello");
// alert("new user!");
// console.log(document);

// console.log(document.getElementById("idone"));

// console.log(document.querySelector("#idtwo")); 

let myele=document.querySelectorAll("p");
// console.log(myele);

// myele.forEach((val)=>{
//     val.textContent="changed content!!!";
// });

// myele.forEach((val)=>{
//     val.remove();
// });

let newpara=document.createElement('p');
newpara.textContent="new paragaraph!";

document.querySelector('body').appendChild(newpara);