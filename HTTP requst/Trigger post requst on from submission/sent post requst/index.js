window.addEventListener("load",function(){
    let form = document.querySelector("form");
    let loginreq=new XMLHttpRequest();
    loginreq.open("POST","https://reqres.in/api/login");
    loginreq.setRequestHeader("Content-Type","application/json")
    loginreq.send(
        JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka",
       })
    );
});