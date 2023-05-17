let height=document.getElementById("hight");
let width=document.getElementById("width");

calculator=()=>{
    let h=window.innerHeight;
    let w=window.innerWidth;
    height.innerText=h;
    width.innerText=w;
};
window.onload=calculator;
window.onresize=calculator;