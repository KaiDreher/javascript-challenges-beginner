/*
 Challenge 1: Print all even numbers from 0 – 10
    
    Try to make the solution to this problem as efficiently as possible. 
    Consider using loops that would allow you to type the fewest characters/commands. 
    While you could simply print the even numbers, get creative and see how you could 
    output them in a way that would work up to 10 or even up to 10,000 with little 
    extra effort.
 */

// you can log out to the console or to the output container like this:
// output.innerText = "My output";
const output = document.getElementById("output-container");
if (!output) throw "Output container not found.";

//@ts-check
// your code starts after this line

// let number = 1;

// const message = number;
// output.innerText = message;
// console.log(message);

// while (Number > 10000) {
// 	number + 1;
// }

// console.log(number);

let number = 10000;
let x = 0;
while (x < number) {
	console.log((x += 2));
}
