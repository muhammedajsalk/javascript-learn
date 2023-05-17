posts=[
    {
        title:"hello world",
        content: "sjdiosf sdjfidf dsjhfdisu",

    },
    {
        title:"post 2",
        content: "sauhdaisuhidhd shbdsh auhdiuh",
    },
];

function viewPosts(){
    setTimeout(()=>{
      let html_content=""
      posts.map((post)=>{
        html_content+=`<h1>${post.title}</h1><p>${post.content}</p>`;
      })
      document.body.innerHTML=html_content;
    },1000)
}

//promise function
function createpost(post){
   return new Promise((resolve,reject)=>{
        posts.push(post);
        console.log(posts);
        let error=false;
        if(!error){
            resolve();
        }else{
            reject("Error occured");
        }
   });
}

let post={
    title:"post3",
    content:"ashdhbdhi sajdk sdauhiu",
};



async function start(){
    await createpost(post);
    viewPosts();
}

start();