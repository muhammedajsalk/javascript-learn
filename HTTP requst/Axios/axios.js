window.addEventListener("load",function(){
    //get requst axios
    axios.get("https://reqres.in/api/users").then((response)=>{
        console.log(response);
        let users=response.data.data;
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
    }).catch(err=>{
        console.log(err); //error hadling
    });

     //post requst axios
     let form = document.querySelector("form");
     let action=form.getAttribute("action");
     let method=form.getAttribute("method");
    form.addEventListener("submit",function(event){
      event.preventDefault();
      let email=document.getElementById("id_email").value;
      let password=document.getElementById("id_password").value;
      axios.post(action,{
          email,
          password,
       }).then(response=>{
           console.log(response.data);
       });
    });
});