window.addEventListener("load",function(){
    let requst=new XMLHttpRequest();
    requst.open("GET","https://reqres.in/api/users");
    requst.send();
    requst.onload=()=>{
        console.log(JSON.parse(requst.response));
        let responsedata=JSON.parse(requst.response);
        let users=responsedata.data; 
        console.log(users);
        users.forEach((user) => {
            console.log(user);
        });
    };
;});