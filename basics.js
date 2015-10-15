// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );

//~~~Answer: typeof is a function that takes what you put in the argument and returns what type of data it is. So in this instance, typeof will return "number."~~~//

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );

//~~~Answer: typeof("hello") will return "string."~~~//

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );

//~~~Answer: typeof([array]) will return "object"~~~//

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );

//~~~Answer: typeof(NaN) will ironically return "number."~~~//

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";

//~~~Answer: JavaScript will add the two together and append the "s" to the end of "hamburger" resulting in "hamburgers."~~~//

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";

//~~~Answer: What's different about this one is that JavaScript tries to subtract an s (that is a string) from another string. Since they're not numbers, this returns NaN.~~~//

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;

//~~~Answer: JavaScript adds 5 to the end of the string. "johnny5"~~~//

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";

//~~~Answer: The function returns NaN because you can't multiply strings by numbers~~~//

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );

//~~~Answer: The .pop method deletes the last entry in the array, the .push method adds a data value to the end of the array, and .unshift prepends a data entry to the beginning of the array. So the final array ~~~//

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );

//~~~Answer: ["dot", "pause", "dot", "dash"]~~~//

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";

//~~~Answer: [["Paul", "John", "George", "Ringo"], ["Mick", "Keith", "Ronnie", "Charlie"]]~~~//
//-------------------------------------------------------------------------------------------------------//

//-------------------------------------------------------------------------------------------------------//

for (var i = 0; i<101 && (i%2) = 0; i++){
    console.log(i)
}

