//href
console.log(location.href);

//hostname
console.log(location.hostname);

//pathname
console.log(location.pathname);

//protocol
console.log(location.protocol);

//assign
let button=document.getElementById("button");
button.addEventListener("click",()=>{
    location.assign("https://talrop.com");
})

//reload
let buttonb=document.getElementById("buttonb");
buttonb.addEventListener("click",()=>{
    location.reload();
})

//replace
let buttonc=document.getElementById("buttonc");
buttonc.addEventListener("click",()=>{
    location.replace("https://talrop.com");
})