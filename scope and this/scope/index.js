//local scope
function myfun(){
    var x=10;
    console.log(x);
}
myfun();
console.log(x);

//global scope
var x=10;
console.log(x);
function myfun(){
    console.log(x);
}
myfun();
console.log(x);