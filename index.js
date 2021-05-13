let playerOneTurn = turnGenerator()
const turnTracker = document.getElementById("header")
let playerOneScore = 0
let playerTwoScore = 0
const startGameBtn = document.getElementById("start-game-btn")
const rollDiceBtn = document.getElementById("roll-dice-btn")
const newGameBtn = document.getElementById("new-game-btn")
const diceContainer = document.getElementById("dice-container")
const playerOneScoreboard = document.getElementById("player-one-scoreboard")
const playerTwoScoreboard = document.getElementById("player-two-scoreboard")
const dice = ["<img>", "<img src='img/dice-1.png'>", "<img src='img/dice-2.png'>", "<img src='img/dice-3.png'>", "<img src='img/dice-4.png'>", "<img src='img/dice-5.png'>", "<img src='img/dice-6.png'>"]


function turnGenerator() {
	let playerSelector = Math.floor(Math.random() * 10)

	if (playerSelector % 2 === 0) {
		return true
	} else {
		return false
	}
}

function displayGameboard() {
	startGameBtn.style.display = "none"
	diceContainer.style.display = "block"
	diceContainer.innerHTML = dice[0]
	rollDiceBtn.style.display = "block"
	newGameBtn.style.display = "block"
}

function startGame() {
	displayGameboard()
	if (playerOneTurn) {
		turnTracker.textContent = "Player One's Turn"
	} else {
		turnTracker.textContent = "Player Two's Turn"
	}
}

function rollDice() {
	let diceCount = Math.floor(Math.random() * 6) + 1
	
	if (playerOneTurn) {
		playerOneScore += diceCount
		diceContainer.innerHTML = dice[diceCount]
		playerOneScoreboard.textContent = playerOneScore
		if (playerOneScore < 21) {
			playerOneTurn = false
			turnTracker.textContent = "Player Two's Turn"
		} else {
			rollDiceBtn.style.display = "none"
			turnTracker.textContent = "Player One Has Won!"
		}
	} else {
		playerTwoScore += diceCount
		diceContainer.innerHTML = dice[diceCount]
		playerTwoScoreboard.textContent = playerTwoScore
		if (playerTwoScore < 21) {
			playerOneTurn = true
			turnTracker.textContent = "Player One's Turn"
		} else {
			rollDiceBtn.style.display = "none"
			turnTracker.textContent = "Player Two Has Won!"
		}
	}
}

function startNewGame() {
	playerOneScore = 0
	playerTwoScore = 0
	playerOneScoreboard.textContent = playerOneScore
	playerTwoScoreboard.textContent = playerTwoScore
	playerOneTurn = turnGenerator()
	startGame()
}

startGameBtn.addEventListener("click", startGame)
rollDiceBtn.addEventListener("click", rollDice)
newGameBtn.addEventListener("click", startNewGame)

