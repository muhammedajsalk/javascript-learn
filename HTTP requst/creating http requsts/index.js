window.addEventListener("load",function(){
     let requst=new XMLHttpRequest();
     requst.open("GET","https://reqres.in/api/users");
     requst.send();
     console.log(requst.response);
;});