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

//call back function
function createpost(post,callback){
    setTimeout(()=>{
      posts.push(post);
      callback();
    },2000)
}

let post={
    title:"post3",
    content:"ashdhbdhi sajdk sdauhiu",
};

createpost(post,viewPosts);
