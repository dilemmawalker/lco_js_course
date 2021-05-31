let john={
    name : "john",
    age : 20,
    active: true
}
let marry={
    name:"marry",
    age : 14,
    active: false
}
let sam={
    name: "sam",
    age:30,
    active: true
}

let users=new Map();

users.set("john",john);
users.set(20,marry);
users.set("sam",sam);

// console.log(users.keys());

// console.log(users.values());
let tr=function(){
users.forEach((value,key)=>{
    console.log(key+"=>"+value.name +","+value.age+","+value.active);
});
};

tr();

console.log(users.get("sam"));

