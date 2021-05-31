let storage=[
            {title: "job",
              value: "result"},
            {
            title: "work",
            value:"timepass"
            },
        
            {title:"streaming service",
            value: "netflix"}
        ];

console.log(storage[0].value);

let getvalue=function(tochecktitle){
    let index=-1;
    storage.forEach(function(set,idx){
        if(set.title===tochecktitle){
            index=idx;
        }
    });
    return index;
}

// let getvalue=function(tochecktitle){
//   let index=storage.forEach(function(set,idx){
//       if(set.title===tochecktitle){
//           return idx;
//       }
//   });
//   return index;
// }



let call=getvalue("work");
console.log(call);