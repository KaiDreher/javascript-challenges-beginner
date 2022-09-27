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

// output.innerText += " x   [1] [2] [3] [4] [5] [6] [7] [8] [9] [10]\n";
// output.innerText += "[1]   1   2   3   4   5   6   7   8   9   10\n";
// output.innerText += "[2]   2   4   6   8   10  12  14  16  18  20\n";
// output.innerText += "[3]   3   6   9   12  15  18  21  24  27  30\n";
// output.innerText += "[4]   4   8   12  16  20  24  28  32  36  40\n";
// output.innerText += "[5]   5   10  15  20  25  30  35  40  45  50\n";
// output.innerText += "[6]   6   12  18  24  30  36  42  48  54  60\n";
// output.innerText += "[7]   7   14  21  28  35  42  49  56  63  70\n";
// output.innerText += "[8]   8   16  24  32  40  48  56  64  72  80\n";
// output.innerText += "[9]   9   18  27  36  45  54  63  72  81  90\n";
// output.innerText += "[10] 10   10  30  40  50  60  70  80  90  100\n";

let value = 0;
let table = 0;
while (table != 10) {
	table = table + 1;
	output.innerText += table;
	while (value != 10) {
		value = value + 1;
		output.innerText += " " + table * value;
	}
	output.innerText += "\n";
	value = 0;
}