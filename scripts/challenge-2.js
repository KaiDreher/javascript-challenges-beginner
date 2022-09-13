/*
 Challenge 2: Print a table containing multiplication tables
    
   Let's start with the tables that many of us had to memorize in school. Can
	you print a table that contains all the answers to the multiplication
	tables from 1 through 10?

   Like Challenge #1, can you create an efficient solution that you could
	easily expand should you need the 12 times table?
 */

// you can log out to the console or to the output container like this:
// output.innerText = "My output";
const output = document.getElementById("output-container");
if (!output) throw "Output container not found.";

//@ts-check
// your code starts after this line

var result = " x   ";

function buff(val) {
	var buff = "";
	var pad = 4 - val;
	while (pad-- > 0) buff += " ";
	return buff;
}

output.innerText = " x   [1] [2] [3] [4] [5] [6] [7] [8] [9] [10]";
output.innerText = "[1]   1   2   3   4   5   6   7   8   9  10";
output.innerText = "[2]   2   4   6   8  10  12  14  16  18  20";
