// console.log("connected!");

// let h=document.createElement("h5");
// let val=document.createTextNode("Hello world!");
// h.appendChild(val);
// document.querySelector('p').appendChild(h);
let ul=document.querySelector("#list");

let addbutton=document.getElementById("add")
addbutton.addEventListener("click",additem);

let removebutton=document.querySelector("#remove")      
removebutton.addEventListener("click",removeitem);

let removeallbutton=document.querySelector("#removeall");
removeallbutton.addEventListener("click",removeall);


function additem(){
    console.log("add button clicked");
}

function removeitem(){
    console.log("remove button clicked");
    let li=ul.children;
    for(let idx=li.length-1;idx>=0;idx--){
        // console.log(li[idx]);
        let lii=li[idx].children;
        for(let i=lii.length-1;i>=0;i--){
            if( lii[i].checked){
                try {
                    ul.removeChild(li[idx]);
                } catch (error) {
                    console.log("errrrrrror!!")
                }
              
            }
        }
    }
}

function removeall(){
    console.log("remove all button clicked");
    let li=ul.children;
    console.log("length of child ele => "+ ul.children.length);
    for(let i=li.length-1;i>=0;i--){
        try {
            ul.removeChild(li[i]);
        }
        catch(error){
            console.log("error in remove all");
        }
    }
}

function additem(){
   
    let aa=document.querySelector(".p1");
    let val=aa.value;
    console.log("add button is working!");
    
    let li=document.createElement("li");
    let input=document.createElement("input");
    input.type="checkbox";
    input.setAttribute("id","check");
    li.setAttribute("class","newer");
    let label=document.createElement("label");

    let hval=document.createTextNode(val);
   
    label.appendChild(hval);
    li.appendChild(input);
    li.appendChild(label);
    ul.appendChild(li);

    setTimeout(()=>{
        // console.log("work");
        li.className="newer";
    },10);

    aa.value="";
}