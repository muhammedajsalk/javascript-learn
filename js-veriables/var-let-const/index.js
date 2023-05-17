//var
var c1="html";
console.log(c1);                       //can update
c1="python";
console.log(c1);

var c1="html";
console.log(c1);                       //can redeclared
var c1="python";
console.log(c1);

var c1;                                //can be declared without initialized
c1="html";

//let
let c1="html";
console.log(c1);                       //can update
c1="python";
console.log(c1);

let c1="html";
console.log(c1);                       //cannot redeclared
let c1="python";
console.log(c1);

let c1:                                //can be declared without initialized
c1="html";

//const
const c1="html";
console.log(c1);                       //cannot update
c1="python";
console.log(c1);

const c1="html";
console.log(c1);                       //cannot redeclared
const c1="python";
console.log(c1);

const c1="hmtl";                       //must be initialized during declaration