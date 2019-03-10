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
			$("hangWord").value = "";
			}
	
	/*Note this is a no space, not an empty space. An empty space 
	will leave a blank at the beginning of the string. */ 
	for (var i=0; i < hangWord.length; i++) 
		{
		wordGuessArray[i] = "__ ";
		}		
	$("trueLetters").firstChild.nodeValue = wordGuessArray.join("");
	}
	
	function lGuess() 
	{
	lGuess = $("playerGuess").value;
	
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
	for (var l=0; l<indices.length; l++)
		{
		var m = indices[l];
		wordGuessArray[m]= lGuess;
		$("trueLetters").firstChild.nodeValue = wordGuessArray.join(" ");
		}
 	}

window.onload =  function()
	{
		$("wordSubmit").onclick = wordLoad;
		$("letterSubmit").onclick = lGuess;	
	};