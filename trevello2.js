let email="yashhanda500@gmail.com    ";
let pass="5678901234567";

console.log(pass.length);
console.log(email.trim());

let check=function(string="",pas){
    if(string.includes(1) || string.length>10){
        return true;
    }
    else{
        return false;
    }
};

let passcheck=function(pas){
    if(pas.length>9 && pas.includes(123)){
        return true;
    }
    else return false;
};

let bool=check(email,pass);
console.log(bool);

let pasfun=passcheck(pass);
console.log(pasfun);

