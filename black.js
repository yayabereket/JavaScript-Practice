let card = []
let sum = 0
let hasblackjack = false
let isalive = false
let message = ""
let elpaso = document.getElementById("message-el")
let elsum = document.getElementById("sum-el")
let elcard = document.getElementById("cards-el")
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13)+ 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}
function startgame() {
    isalive = true
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    card = [card1,
    card2
]
     sum = card1 + card2

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
    //console.log(message)
    elpaso.textContent = message
    elsum.textContent = "Sum: " + sum
    elcard.textContent = "Cards: "
    for (let i = 0; i < card.length; i++) {
        elcard.textContent += " " + card[i] 
        
    }
}
function newcard() {
    //console.log("new card")
    if (isalive === true && hasblackjack === false) {
        let elcard = getRandomCard()
    sum += elcard
    card.push(elcard)
    rendergame()
    } 
}
/* let ab = ["ab","bc","af"]
for (let abe = 0; abe < ab.length; abe += 1 ){
   console.log(ab[abe])
} */
// let random = Math.floor(Math.random() * 7)
// console.log(random)
// console.log(random)
// function dicegame() {
//     let ranum = Math.floor (Math.random() * 6) + 1
//     return ranum
// }
// console.log(dicegame()) * 
// let likesdocumentary = true
// let likestartup = false
// if (likesdocumentary || likestartup === true) {
// reccomend()
// }
// function reccomend() {
//     console.log("hey watch this")
// }
