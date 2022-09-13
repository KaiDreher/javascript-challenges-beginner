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

const MAX_N = 10;

for (let n = 0; n <= MAX_N; n += 2) {
	output.append(n);
	console.log(n);
}

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
