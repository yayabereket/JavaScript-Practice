let card1 = 10
let card2 = 4
let sum = card1 + card2
let hasblackjack = false
let isalive = true
let message = ""
let elpaso = document.getElementById("message-el")
let elsum = document.getElementById("sum-el")
let elcard = document.getElementById("cards-el")
function startgame() {
    rendergame()
}
function rendergame() {
    if (sum <= 20) {
        message = "Do you want to draw card?"
    } else if (sum === 21) {
        message = "blackjack!!"
        hasblackjack = true
    } else {
        message = "you're out!!"
        isalive = false
    }
    console.log(message)
    elpaso.textContent = message
    elsum.textContent = "Sum: " + sum
    elcard.textContent = "Cards: "+ card1 + " and " + card2
}
function newcard() {
    console.log("new card")
    let elcard = 5
    sum += elcard
    rendergame()
}
