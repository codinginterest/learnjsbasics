console.log("Hello World");
//Js is case sensitive

//let is block scoped while var is global scope
var a = 35;
let b = 50;
b = 36;
{
  a = 27;
  let b = 33;
  console.log(a);
  console.log(b);
}
const check_1 = "abcd";
console.log(a);
console.log(b);
console.log("Hello");
// check_1 = 43;
console.log(check_1);
