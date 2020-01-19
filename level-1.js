/* Question 1. 
Declare and initialise
a variable with string value.*/

var favoriteNflTeam = "packers";

/* Question 2. 
create an object variable called 
person and give it two properties 
(a key and a value of your choice*/

var person = {
	height: 180,
	hairColor: "brown"
};

/*Question 3.
Create a variable called outOfStock and
assign it a boolean value. Create an if else statement
that checks the value of outOfStock. If it is true,
console log "Out of stock". Otherwise log "In stock". */

var outOfStock = true;

if (outOfStock === true) {
	console.log("Out of stock");
} else {
	console.log("In stock");
}

/*Question 4
Create an array of five numbers. Loop through 
the array and console log each value.*/

var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}

/*Question 5. 
Create a for loop that counts from 15 to 25.
Console log the value of the counter variable 
inside the loop.*/

for (var i = 15; i <= 25; i++) {
	console.log(i);
}

/*Question 6
Using the same loop from the above question,
only log the value of the counter variable 
if it is equal to 20.*/

for (var i = 15; i < 26; i++) {
	if (i === 20) {
		console.log(i);
	}
}

/*Question 7
Create an array of two objects. Each object must have
the same three properties (with different values):
one property with a string value
one property with a number value
one property with a boolean value
Loop through the array and console log 
the number value and the boolean value.*/

var fotballTeam = [
	{
		shirtColor: "green and yellow",
		score: 14,
		winningSuperBowl: true
	},
	{
		shirtColor: "white and blue",
		score: 3,
		winningSuperBowl: false
	}
];
for (var i = 0; i < fotballTeam.length; i++) {
	console.log(fotballTeam[i].score);
	console.log(fotballTeam[i].winningSuperBowl);
}

/*Question 8
Create a function called whatIDontLike that accepts 
one argument. Choose a good name for the argument.
Inside the function, log the string "I don't like " 
together with the argument.
Call the function and pass in a value of your choice.
Example:
If you pass in the value "giraffes", 
the function should log: "I don't like giraffes".*/

function whatIDontLike(heights) {
	console.log("I don´t like " + heights);
}
whatIDontLike("heights");

/*Question 9
Create a function that accepts two arguments.
Inside the function, subtract the second argument 
from the first and console log the result.*/

function ageFinder(birthYear, todaysYear) {
	var sum = todaysYear - birthYear;
	console.log(sum);
}
ageFinder(1990, 2020);

/*Question 10
Create an empty array.
Create a function that accepts one argument.
Inside the function, add the argument to the array.
Call the function and pass in a value of any type.*/

var emptyArray = [];
function name(Rodgers) {
	emptyArray.push(name);
}
name("Aron");
