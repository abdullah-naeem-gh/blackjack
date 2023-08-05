


let cards = []
let sum = 0
hasblackjack = false
let isalive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardEl = document.querySelector(".cards-el")
let playerEl = document.querySelector("#player-el")

let player = {
    name: "Abdullah",
    chips: 150 + "$"
}

playerEl.textContent = player.name + ": " + player.chips

function getRandomCard() {
    let randomcard = Math.floor( Math.random()*13 ) + 1

    if( randomcard === 1) {
        return 11
    } else if(randomcard >= 11) {
        return 10
    } else {
        return randomcard
    }
}

function startgame() {
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard,secondcard]
    sum = firstcard + secondcard
    isalive = true
    rendergame()
}


function rendergame() {
cardEl.textContent = "Cards: "
for(let i = 0 ; i < cards.length ; i++) {
    cardEl.textContent +=  cards[i] + " "
}

sumEl.textContent = "sum: " + sum
if (sum <= 20) {
    message = "Do you want to draw another card?"
} else if(sum === 21) {
    message = "wOOHOO! You've won the game" 
    hasblackjack = true
} else {
    message = "You're out of the game!"
    isalive = false
}
messageEl.textContent = message

}

function newcard() {
    if(hasblackjack === false && isalive === true) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    rendergame()
    }
}


