/*Question 1
Using the loop from question 5 above, 
only log the counter variable if it is an even number.
Hint: you can use the modulus % operator for this.*/

for (var i = 15; i <= 25; i++) {
	if (i % 2 == 0) console.log(i);
}

/*Question 2
Create a function that logs the sentence 
"I am a function". Assign this function to a variable 
called innerFunction. Create another function called 
outerFunction that accepts one argument. 
Inside outerFunction, call the argument like you would 
a function - with parenthesis (). Call outerFunction 
and pass in the innerFunction variable.*/

function sentencelogger() {
	console.log("I am a function");
}
var innerFunction = "I a function";
console.log(innerFunction);
function outerFunction(argument) {
	console.log(outerFunction);
}
/* i dont think I understand the last question
so this was just me trying it, I did speak with others
in the class, and i can tell most of the people 
where confused by the question.*/
