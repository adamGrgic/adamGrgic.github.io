// JavaScript Document

// Welcome the user to the game



// As your sanity lowers, the complexity of dice increases


let characterSanity;

let characterInfo =[];
let playerPoints;
function rollDice() {
	let randomNumber = Math.floor(Math.random() * this.sides) + 1;
}

function compareValues() {};

let dice = {
	dice1: {
		sides: 6,
		roll: function() {
			let randomNumber = rollDice(sides);
		
	}
		
	},
	dice2: {
		sides: 12,
		roll: function() {
			let randomNumber = rollDice(sides);
		
	}
		
	},
	dice3: {
		sides: 24,
		roll: function() {
			let randomNumber = rollDice(sides);
		
	}
		
	},
	dice4: {
		sides: 48,
		roll: function() {
			let randomNumber = rollDice(sides);
	}
	},
		
	dice5: {
		sides: 96,
		roll: function() {
			let randomNumber = rollDice(sides);
		
	}
	},
	dice6: {
		sides: 192,
		roll: function() {
			let randomNumber = rollDice(sides);
		
	}
	},
	
};


// Linked to first submit button
// Generates character information
let createCharacter = function() {
	characterInfo.push(document.getElementById("characterName").value);
	characterInfo.push(document.getElementById("characterCity").value);
	characterInfo.push(characterSanity = 100);
	console.log(characterInfo);
	
}

function userRollDice() {
	if (characterInfo[2] >= 85) {
		thing(dice.dice1);
		}
		
	
	else if (85 > characterInfo[2] >= 70) {
		thing(dice.dice2);
		}
		
	
	else if (70 > characterInfo[2] >= 55) {
		thing(dice.dice3);
		}
		
	
	else if (55 > characterInfo[2] >= 40) {
		thing(dice.dice4);
		}
		
	
	else if (40 > characterInfo[2] >= 25) {
		thing(dice.dice5);
		
	}
	else if (25 > characterInfo[2] >= 10) {
		thing(dice.dice6);
		
	}
	else {
			alert("Your sanity is too low. You lose the game.")
		}
	}
	
	
	
}


function thing(diceToRoll){
	diceToRoll.roll;
		if (randomNumber = 6) {
			characterInfo[2] -= 15;
}



//let characterInfo = { 
//	name: document.getElementById('characterName').value,
//	city: document.getElementById('characterCity').value,
//	characterSanity : 100
//	
//};














//    These are lines of code from a previous version -- I hated it and started over :) //







// dice operations


//var dice = {
//  sides: 6,
//  roll: function () {
//    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//    return randomNumber;
//  }
//}
//
//var dice2 = {
//  sides: 8,
//  roll: function () {
//    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//    return randomNumber;
//  }
//}
//
//var dice3 = {
//  sides: 10,
//  roll: function () {
//    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//    return randomNumber;
//  }
//}
//
//var dice4 = {
//  sides: 12,
//  roll: function () {
//    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//    return randomNumber;
//  }
//}
//
//var dice5 = {
//  sides: 16,
//  roll: function () {
//    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//    return randomNumber;
//  }
//}
//
//var dice6 = {
//  sides: 26,
//  roll: function () {
//    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//    return randomNumber;
//  }
//}




//Prints dice roll to the page
//
//function printNumber(number) {
//  var placeholder = document.getElementById('placeholder');
//  placeholder.innerHTML = number;
//}
//
//var button = document.getElementById('button');
//
//button.onclick = function() {
//  var result = dice.roll();
//  printNumber(result);
//};
//
//
//
//let character = document.getElementById('characterInfo')= {
//	let characterName = characterinfo.name;
//	let characterCity = characterinfo.city;
//	
//};

// User rolls

// Dice is rolled and a number is chosen between 1 and 6 

// Number is generated / stored within the system
// Number is reported to the user 



