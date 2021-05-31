let f1=function(name){
    console.log("Hello my " + "name is " + name + "!");
};

// f1("yash");

let f2=(name)=>{
    console.log("Hello my name is "+name+"$");
}

// f2("rohan");


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

// storage.forEach((value,idx)=>{
//     console.log(value);
// });


// let f3=storage.forEach((val,idx)=>{
//     console.log(val.title +" => "+ val.value);
// });


// f3;

let store=[
    {
        "title": "me",
    "value": true
    },
    {
        "title":"go",
        "value": true
    },
    {
        "title":"hello",
        "value": false
    },
    {
        "title":"stream",
        "value":false
    }];

    let fun=store.forEach((val,idx)=>{
        if(val.value)
        console.log(val.title);
    });

