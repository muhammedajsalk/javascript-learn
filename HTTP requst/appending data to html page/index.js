window.addEventListener("load",function(){
    let requst=new XMLHttpRequest();
    requst.open("GET","https://reqres.in/api/users?page=2");
    requst.send();
    requst.onload=()=>{
        console.log(JSON.parse(requst.response));
        let responsedata=JSON.parse(requst.response);
        let users=responsedata.data; 
        console.log(users);
        let parentul=this.document.querySelector("#users ul")
        users.forEach((user) => {
            console.log(user);
            let newchild=document.createElement("li");
            let innerhtml=`<div class="left">
              <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
            </div>
            <div class="right">
              <h1>${user.first_name} ${user.last_name}</h1>
              <a href="mailto:${user.email}">${user.email}</a>
            </div>`
            newchild.innerHTML=innerhtml;
            parentul.appendChild(newchild);
        });
    };
;});