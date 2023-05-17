window.addEventListener("load",(event)=>{
    
    let showhidemenu=()=>{
        document.querySelector("#mobile-menu").classList.toggle("active");
        document.querySelector("span.close").classList.toggle("active");
        document.querySelector("span.overlay").classList.toggle("active");
    }
    document.getElementById("menu-icon").addEventListener("click",()=>{
       showhidemenu();
       let mobilemenu=document.getElementById("mobile-menu");
       mobilemenu.style.display="block";
    });
    document.querySelector("span.close").addEventListener("click",()=>{
       showhidemenu();
    });
    document.querySelector("span.overlay").addEventListener("click",()=>{
       showhidemenu();
    });
})