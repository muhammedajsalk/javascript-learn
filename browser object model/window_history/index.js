let back=document.getElementById("back");
let forward=document.getElementById("forward");
back.addEventListener("click",()=>{
    history.back();
});
forward.addEventListener("click",()=>{
    console.log("clicked");
    history.forward();
});