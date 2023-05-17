let number= document.getElementById("number");
let button= document.getElementById("button");
let numberb=document.getElementById("numberb");
let buttonb= document.getElementById("buttonb");
randonNumber=()=>{
    number.innerText=Math.random();
};
var randomTimeout= setTimeout(randonNumber, 4000);//settimeout

button.addEventListener("click",()=>{
     clearTimeout(randomTimeout);//cleartimeout
})

randonNumberb=()=>{
   numberb.innerText=Math.random();
};

var updatenumber=setInterval(randonNumberb,500);//setinterval
buttonb.addEventListener("click",()=>{
    clearInterval(updatenumber);//clearinterval
})