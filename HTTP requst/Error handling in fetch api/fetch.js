window.addEventListener("load",function(){
    fetch("https://reqres.in/api/users")
    .then((response)=>{
        console.log(response.status);//status ariyaan
       return response.json();
     })
     .then((responseData)=>{
        console.log(responseData);
        let users=responseData.data;
        let parentul=this.document.querySelector("#users ul")
        if(users){
            users.forEach((user) => {
             let newchild=document.createElement("li");
             let innerhtml=`<div class="left">
             <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
             </div>
             <div class="right">
             <h1>${user.first_name} ${user.last_name}</h1>
             <a href="mailto:${user.email}">${user.email}</a>
             </div>`;
             newchild.innerHTML=innerhtml;
             parentul.appendChild(newchild);
            });
        }

    }).catch((err)=>{
        console.log(err.message);//error handling
    });
});