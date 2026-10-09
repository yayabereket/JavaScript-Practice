let card1 = 10
let card2 = 11
let sum = card1 + card2
let hasblackjack = false
let isalive = true
let message = ""
let elpaso = document.getElementById("message-el")
let elsum = document.getElementById("sum-el")
function startgame() {
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
    elsum.textContent += sum
}
