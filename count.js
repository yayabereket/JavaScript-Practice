let countel = document.querySelector("#count-el")
let Saveel = document.getElementById("welcome-el")
let count = 0
//let incbtn = document.getElementById("increament-btn")

    function increament() {
        
     count += 1
    countel.textContent = count
    
    }
    //textContent is alternative for innerText!!
    function decreament() {
        count = 0
        countel.textContent = count
    }
    function save() {
        let boom = count +"  -  "
        Saveel.textContent += boom
        countel.textContent = 0
        count = 0
        console.log(count)
    }
  // let welcome = document.getElementById("welcome-el")
    //let username = "John"
    //let greeting = "welcome back"
        //username = username + " "+"hi"
    //welcome.innerText =  greeting +", "+ username
    //welcome.innerText += "  hi"

  

