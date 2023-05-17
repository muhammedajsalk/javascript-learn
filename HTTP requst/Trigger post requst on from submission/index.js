window.addEventListener("load",function(){
    let form = document.querySelector("form");
    
    let action=form.getAttribute("action");
    let method=form.getAttribute("method");

    form.addEventListener("submit",function(event){
         event.preventDefault();
         let loginreq=new XMLHttpRequest();
         loginreq.open(method,action);
         loginreq.setRequestHeader("Content-Type","application/json")
         loginreq.send(
             JSON.stringify({
             "email": "eve.holt@reqres.in",
             "password": "cityslicka",
            })
         );
    });


});