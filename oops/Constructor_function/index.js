class Home{
    constructor(color,rooms,doors){
         this.color=color;
         this.rooms=rooms;
         this.doors=doors;
    }

    open=()=>{
        console.log("open");
    };

    close=()=>{
        console.log("close");
    };

    clean=()=>{
        console.log("clean");
    };
}

let NewHome=new Home("red",3,6);
let NewHome2=new Home("green",7,14);
console.log(NewHome);
console.log(NewHome.color);
console.log(NewHome2);
console.log(NewHome2.color);
