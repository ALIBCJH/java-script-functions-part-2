// program to print the text
// declaring a function
function greet(name) {
  console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);

//program that add 2 numbers
function add(a, b){
  console.log(a+b);
}
add(3,4);
add(2,9);

function add(a, b){
  return a+b;
}
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number"));
  let result = add(number1, number2);
  
  cconsole.log("Tge sum is " + results);
  
//Program finding the square of a number
let x = function (num) {
  return num * num;
};
console.log(x(4));

let y = x(3);
console.log(y);

const age = 35;
const votingAge = () =>{
  age >= 18 ? "You are allowed to via for the president" : "You are too young to via for the presidency";
}
