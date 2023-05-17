let box=document.getElementById("box");
let button=document.getElementById("button");
let number=document.getElementById("number");

randomNumber = ()=>{
   number.innerText=Math.random();
};

box.addEventListener("mouseover",randomNumber);
button.addEventListener("click",()=>{
    box.removeEventListener("mouseover",randomNumber)
});