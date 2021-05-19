let isverified=true;
let isloggedin=true;
let haspayment=true;
let isguest=true;

if(isverified && isloggedin && haspayment && isguest){
    console.log("grant access to paid course");
}
else if(isverified || isloggedin){
    console.log("free course");
}
else{
    console.log("contact admin");
}