// on click event to get started
// function myFunction() {
//     var x = document.getElementById("hangWord").value;
//     document.getElementById("demo").innerHTML = x;
// }
// set up the h3 "winning word header"
		var words = getElementById("words");
		var words = ["eartha kitt", "mae west", "divine", "pam grier", "tura satana"]
		for (var i = 0; i < words.length; i++) {
			words[i]
		};
		// need to define what wins is
		if (words === wins){
			h3.innerHTML = [i]
		}
		// Do I need this?
		var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
						"r","s","t","u","v","w","x","y","z"];
		// Should these be an object run on a loop for currentWord?
		var earthaKitt = ["e","a","r","t","h","a","k","i","t","t"];
		var maeWest = ["m","a","e","w","e","s","t"];
		var divine = ["d","i","v","i","n","e"];
		var pamGrier = ["p","a","m","g","r","i","e","r"];
		var turaSatana = ["t","u","r","a","s","a","t","a","n","a"];

			function currentWordGuess(){
				earthaKitt.length
			}

			var currentWord = document.getElementById('currentWord');
			currentWord.onkeypress = currentWordGuess;

			function currentWordGuess(){
				if (currentWord === earthaKitt){
					words[0]
					li.earthaPic
					currentWord resets to maeWest
				}
				else if(currentWord !== earthaKitt){
					innerHTML.deadLetters
					guesses -1
				}
			}


	// make a counter that figures out how many wins the user has
		var wins = getElementById("wins");


	// make a section that counts the current word
		var guesses = getElementById("guesses"); 
	// # of guesses the user has left

	// if user guesses correctly then number stays the same
	// if user guesses incorrectly take -1 off of guesses
	// 
	// letters that have already been guessed
		var deadLetters = getElementById("deadLetters");
		
	// if user guesses a wrong letter add it here, if user guesses the right letter
	// add it here.