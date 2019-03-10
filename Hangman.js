"use strict";
var $ = function(id) 
{ 
return document.getElementById(id); 
};

var hangWord;
var lGuess;
var wordGuess;
var wordGuessArray= [];
var hangWordArray = [];
function wordLoad() 
	{
	hangWord = $("hangWord").value;
	
	if (hangWord.search(/[^a-z]/i) !==-1)
		{
		alert("Enter only letters");
		}
		else 
			{
			hangWord = hangWord.toLowerCase();
			hangWordArray = hangWord.split("");
			console.log("Initial value fo hangword array is " + hangWordArray);
			$("hangWord").value = "";
			}
	
	/*Note this is a no space, not an empty space. An empty space 
	will leave a blank at the beginning of the string. */ 
	for (var i=0; i < hangWord.length; i++) 
		{
		wordGuessArray[i] = "__ ";
		}
		console.log(" WordGuessArray is is an array is " + Array.isArray(wordGuessArray));
		console.log("The initlal wordGuess value is " +wordGuessArray);
		
	$("trueLetters").firstChild.nodeValue = wordGuessArray.join("");
	
	}
	
	function lGuess() 
	{
	lGuess = $("playerGuess").value;
	console.log("lGuess is " + lGuess);
	
	if (lGuess.search(/[^a-z]/i) !==-1 || lGuess.length > 1)
		{
		alert("Enter one letter");
		}
		
	else 
		{
		lGuess = lGuess.toLowerCase();
		}
	console.log("lGuess after .toLowerCase is " + lGuess);
	
	
	/*for(var h = 0; h < wordGuess.length; h++){
		wordGuessArray[h]= wordGuess[h];
	}
	
	wordGuessArray = wordGuess.split(" ");
	console.log("wordGuessArray is " + wordGuessArray);
	*/
	var indices = [];
	console.log("Hangword in lGuess function is " + hangWord);
	for (var k = 0; k < hangWordArray.length; k++)
		{
			console.log("hangWordArray "+ [k] + " is " + hangWordArray[k]);
		if (hangWordArray[k] === lGuess) 
			{
			indices.push(k);
			
			}
		}
	for (var l=0; l<indices.length; l++)
		{
			var m = indices[l];
			console.log("M is " + m);
		wordGuessArray[m]= lGuess;
		
		console.log(wordGuessArray[m]);
		$("trueLetters").firstChild.nodeValue = wordGuessArray.join(" ");
		console.log("The guessword string is " + $("trueLetters").firstChild.nodeValue);
		
		}
	console.log(" ");
 	}

window.onload =  function()
	{
		$("wordSubmit").onclick = wordLoad;
		$("letterSubmit").onclick = lGuess;	
	};