//this

//1)

//ithil ulla this represent cheyunath constructor ull kolluna classinne ann

class Home{
    constructor(color,rooms,doors){
        this.color=color;
        this.rooms=rooms;
        this.doors=doors;
    }
}

let newHome=new Home("red",4,6);

//2) this alone
//global objectinneyann refer cheyunath

console.log(this);
//output {}

//3) browser window anankil

//windowyaan represent cheyunath


//4) oru functionnte ullil anankil

let myfunc=()=>{
   console.log(this);
};
myfunc();
//output {}

//ippolum global objectinne thanne ann represent cheyunath


//5) object ullil anankil represent cheyunath obejcetinne ann
var person={
    firstname:"john",
    lastname:"doe",
    id:5555,
    mufunxtion:function(){
        return this;
    }
};
