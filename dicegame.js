// JavaScript Document

// Welcome the user to the game



// As your sanity lowers, the complexity of dice increases




// global variables -- these variables are inluded in more than one function
let totalPoints;
let randomNumber;
let devilsPoints;
let pointsAdded;

// Linked to first submit button
// Generates character information
let createCharacter = function() {
	characterInfo.name = document.getElementById("characterName").value;
	characterInfo.city = document.getElementById("characterCity").value;
	
	console.log(characterInfo);
	
}
// Character object 
let characterInfo = {
    sanity :100,
	score : 0
};

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



// Function that does the actual dice roll
function rollDice() {
	randomNumber = Math.floor(Math.random() * dice.dice1.sides) + 1;
	console.log(randomNumber);
	return randomNumber;
}



//User rolls dice three times for points
function userRollDice() {
	let roll1 = rollDice();
	let roll2 = rollDice();
	let roll3 = rollDice();
	totalPoints = roll1 + roll2 + roll3;
	console.log("Roll 1: " + roll1 + " Roll 2: " + roll2 + " Roll 3: " + roll3 + " Total Score: " + totalPoints);
	return totalPoints; 
}
	
	
// Function that adds points to user score
function addScore() {
	characterInfo.score += totalPoints;
	console.log(totalPoints + " points were added to your score");
	console.log(characterInfo.score);
	return characterInfo.score;
	
}
	

// Function that lets the devil roll the dice
function devilRoll() {
	let devilRoll1 = rollDice();
	let devilRoll2 = rollDice();
	let devilRoll3 = rollDice();
	devilsPoints = devilRoll1 + devilRoll2 + devilRoll3;
	console.log("the devil rolled " + devilsPoints);
}

// Function that subtracts the devilsPoints from the usersPoints
function modifyTotals() {
	pointsAdded = totalPoints - devilsPoints;
	characterInfo.score += pointsAdded;
	console.log(pointsAdded + " points were added to your score.");
}

// Function that implements all other dice rolling related events
function playGame() {
	userRollDice();
	addScore();
	devilRoll();
	modifyTotals();
	if (pointsAdded % 6 === 0) {
		characterInfo.sanity -= pointsAdded;
		console.log(characterInfo.sanity);
	}
	
}



//	
//function 
//	if (characterInfo[2] >= 85) {
//		thing(dice.dice1);
//		}
//		
//	
//	else if (85 > characterInfo[2] >= 70) {
//		thing(dice.dice2);
//		}
//		
//	
//	else if (70 > characterInfo[2] >= 55) {
//		thing(dice.dice3);
//		}
//		
//	
//	else if (55 > characterInfo[2] >= 40) {
//		thing(dice.dice4);
//		}
//		
//	
//	else if (40 > characterInfo[2] >= 25) {
//		thing(dice.dice5);
//		
//	}
//	else if (25 > characterInfo[2] >= 10) {
//		thing(dice.dice6);
//		
//	}
//	else {
//			alert("Your sanity is too low. You lose the game.")
//		}
//	}
//	
//	
//	
//}
//
//
//function thing(diceToRoll){
//	diceToRoll.roll;
//		if (randomNumber = 6) {
//			characterInfo[2] -= 15;
//}



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



