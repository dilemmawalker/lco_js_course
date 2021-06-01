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
    let val=document.querySelector("#input1").value;
    console.log(val);
}
