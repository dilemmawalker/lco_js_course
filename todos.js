let todo={
    day: "monday",
    meetings:0,
    meetingsdone:0
};

let addmeeting=function(tod,meet){
    tod.meetings=tod.meetings+meet;
};

let meetingdone=function(tod,meet){
    tod.meetingsdone=tod.meetingsdone+meet;
}

let meetingleft=function(tod){
    return tod.meetings-tod.meetingsdone;
}

let reset=function(tod){
    tod.meetings=0,
    tod.meetingsdone=0
};

addmeeting(todo,5);
meetingdone(todo,2);
let val=meetingleft(todo);
console.log("meetings left : "+ val);
console.log(todo);

reset(todo);
console.log(todo);

todo.add(sex,fuck);