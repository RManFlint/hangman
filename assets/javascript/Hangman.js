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
var falseCount = 0;
var falseMsg = "";
var wrongGuess = [];
var indexLength = 0;

function wordLoad() 
	{
	wordGuessArray.length=0;
	$("playerGuess").disabled = false;
	hangWord = $("hangWord").value;
	
	if (hangWord.search(/[^a-z]/i) !==-1)
		{
		alert("Enter only letters");
		}
		else 
			{
			hangWord = hangWord.toLowerCase();
			hangWordArray = hangWord.split("");
			$("hangWord").value = "";
			}
	
	/*Note this is a no space, not an empty space. An empty space 
	will leave a blank at the beginning of the string. */ 
	for (var i=0; i < hangWord.length; i++) 
		{
		wordGuessArray[i] = "__ ";
		}		
	$("trueLetters").firstChild.nodeValue = wordGuessArray.join("");
	$("playerGuess").focus();
	$("playerGuess").value = "";

	}
	
	function lGuess() 
	{
	var leftGuess;
	lGuess = $("playerGuess").value;
	if(hangWord.length < 7){
		leftGuess = hangWord.length;
	}
	else{
		leftGuess = 7;
	}

	
	if (lGuess.search(/[^a-z]/i) !==-1 || lGuess.length > 1)
		{
		alert("Enter one letter");
		}		
	else 
		{
		lGuess = lGuess.toLowerCase();
		}
	var indices = [];
	for (var k = 0; k < hangWordArray.length; k++)
		{
		if (hangWordArray[k] === lGuess) 
			{
			indices.push(k);			
			}
		}
		if (hangWordArray.indexOf(lGuess)===-1)
			{
			falseCount++;
			
			falseMsg = "Prisoner, you have " + falseCount +" wrong guesses." + (leftGuess - falseCount) + " guesses until you swing!";
			$("falseLetters").firstChild.nodeValue = falseMsg;
			wrongGuess.push(lGuess);
			$("wrongGuess").firstChild.nodeValue = "You have guessed " + wrongGuess.join(", ");
					}
	for (var l=0; l<indices.length; l++)
		{
		var m = indices[l];
		wordGuessArray[m]= lGuess;
		$("trueLetters").firstChild.nodeValue = wordGuessArray.join(" ");
		console.log("indices length is " + indices.length);
		indexLength++;
		console.log("Indexlength is "+ indexLength)
	
		}
	if (falseCount===leftGuess){
		$("falseLetters").firstChild.nodeValue = "To the tumbril, Prisoner!  Where shall we send the corpse?";
		$("falseLetters").setAttribute("class", "red")
		$("playerGuess").disabled = true;
	}
	
	if (hangWord.length === indexLength){
		$("falseLetters").firstChild.nodeValue = "You have evaded the hangman for today, Prisoner!  Return to your cell!";
		$("falseLetters").setAttribute("class", "blue")
		$("playerGuess").disabled = true;
	}

	
	$("playerGuess").value = "";
	$("playerGuess").focus();

 	}

window.onload =  function()
	{
		$("wordSubmit").onclick = wordLoad;
		$("letterSubmit").onclick = lGuess;	
	};