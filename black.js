let card1 = 10
let card2 = 4
let card = [card1,
    card2
]
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
    elcard.textContent = "Cards: "
    for (let i = 0; i < card.length; i++) {
        elcard.textContent += " and " + card[i] 
        
    }
}
function newcard() {
    console.log("new card")
    let elcard = 5
    sum += elcard
    card.push(elcard)
    rendergame()
}
/* let ab = ["ab","bc","af"]
for (let abe = 0; abe < ab.length; abe += 1 ){
   console.log(ab[abe])
} */