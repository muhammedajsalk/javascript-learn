class Home{
    color="blue";
    rooms=3;
    doors=5;
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

let NewHome=new Home();
console.log(NewHome);
console.log(NewHome.open());
