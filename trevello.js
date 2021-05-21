let todo={
    day:"Monday",
    meet:0,

    addmeeting:function(num){
        this.meet=this.meet+num;
    }
};

todo.addmeeting(3);
console.log(todo.meet);

