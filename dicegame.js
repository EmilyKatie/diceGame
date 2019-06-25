runGame();

function runGame() {	// master function
//
let alert = "Player one rolls 5 dice. If 2 or 5, earn a strike. When 3 strike count is reached, player rolls wildcard die, if roll returns clear strikes, turn starts over. If roll returns turn over, turn is over. Player 2 rolls using same directions."

let prompt = "Player one roll 5 dice."
FiveDice();
function FiveDice(){
	let diceToRoll = []
	let d1 = Math.floor(Math.random() * 3) + 1;
	diceToRoll.push(d1);
	console.log(diceToRoll);
	let d2 = Math.floor(Math.random() * 4) + 1;
	diceToRoll.push(d2);
	console.log(diceToRoll);
	let d3 = Math.floor(Math.random() * 5) + 1;
	diceToRoll.push(d3);
	console.log(diceToRoll);
	let d4 = Math.floor(Math.random() * 6) + 1;
	diceToRoll.push(d4);
	console.log(diceToRoll);
	let d5 = Math.floor(Math.random() * 7) + 1;
	diceToRoll.push(d5);
	console.log(diceToRoll);
}
	//for(let i = 0; i < diceToRoll.length; i++){
		//rollDie(diceToRoll[i]);
		//if (i) =//roll 2 or 5, earn strike

	
	let myRoll = addDiceTotal()
	console.log(FiveDice)

	let p1Score = 0;
	let p1Strikes = 0;

// let playerOne = p1Roll;
// let p1Roll = diceToRoll
// p1Roll = rollDie(3)

	//let p1FirstDie = rollDie(3);




}

function rollDie(numberOfSides) {
	let d1 = Math.floor(Math.random() * numberOfSides) + 1;
	console.log(d1)
	return d1;
}




// function rollDice1(dieElementID){
// 	let die1 = document.getElementById("die1");
// 	let d1 = rollDie(3);
// 	die1.innerHTML = newDieValue;
// 	console.log(rollDice1)
// }

// function rollDice2(dieElementId){
// 	let die2 = document.getElementById("die2");
// 	let d2 = rollDie(4);
// 	die2.innerHTML = newDieValue;
// 	console.log(rollDice2)
// }

// function rollDice3(dieElementId){
// 	let die3 = document.getElementById("die3");
// 	let d3 = Math.floor(Math.random() * 5) + 1;
// 	die3.innerHTML = newDieValue;
// 	console.log(rollDice3)

// }
// function rollDice4(dieElementId){
// 	let die4 = document.getElementById("die4");
// 	let d4 = Math.floor(Math.random()  *6)  +1;
// 	die4.innerHTML = newDieValue;
// 	console.log(rollDice4)
// }

// function rollDice5(){
// 	let die5 = document.getElementById("die5");
// 	let d5 = Math.floor(Math.random() * 7) + 1;
// 	die5.inner.HTML = newDieValue;
// 	console.log(rollDice5)
// }


/*function addDiceTotal*/

switch (rollDice6)
{
		case "2":
		console.log("Strike! Roll again.");
		break;
		case "5":
		console.log("Strike! Roll again.");
		break;
		default:
		console.log("Wahoo! Add up dice. Roll again!")
		break;
}
