let marks=function(my,total){
    let per=(my/total)*100;

    let grade="";
    if(per>90)
    grade="A";
    else if(per>80)
    grade="B";
    else if(per>70)
    grade="C";
    else grade="E";

    return grade;
}

let val=marks(78,100);
console.log("grade "+ val);