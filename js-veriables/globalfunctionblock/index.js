

//global scope(global yella stalayhum upayokikaan pattum)
var c1="html";
let c2="css";
const c3="javascript";

function message(){
    console.log(c1);
    console.log(c2);
    console.log(c3);
}
message();
console.log(c1);
console.log(c2);
console.log(c3);

// block scope(block kalil mathram ubayokikaan patuikayullu)
function message(){
    if(true){
     var c1="html";
     let c2="css";
     const c3="javascript";
     console.log(c1);
     console.log(c2);
     console.log(c3);
    }
    console.log(c1);
     console.log(c2);
     console.log(c3);
}
message();

//function scope(function nte ullil mathram upayokikaan pattukayullu)
function message(){
    var c1="html";
    let c2="css";
    const c3="javascript";
    console.log(c1);
    console.log(c2);
    console.log(c3);
}
message();
