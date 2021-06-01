let myfun=function(a){
    let val=document.querySelector("#placeholder1").value ;
    if(val>=1 && val<=20){
        console.log("valid input");
    }
    else{
        console.log("not a valid input");
    }
}

let submitted=function(){
    let val=document.querySelector(".input1").value;
    console.log(val);
}

// document.querySelector("#myform").addEventListener("submit",(event)=>{
//     event.preventDefault();
//     console.log(event.target.input1.value);
//     console.log(event.target.input2.value);
//     event.target.input1.value="";
// });

document.querySelector(".form2").addEventListener("submit",(event)=>{
    let p1=event.target.pass.value;
    let p2=event.target.repass.value;
    event.preventDefault();
    if(p1==p2){
        console.log("successful registration");
    }
    else{
        console.log("password dosen't match");
    }
})