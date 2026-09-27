console.log("javascript is working");

const button1 = document.getElementById("myButton");
button1.addEventListener("click" ,function () { button1.textContent = "you clicked it";
    
});
const title = document.querySelector("#title");
const button2 = document.querySelector("#btn");
button2.addEventListener("click" ,() =>{title.textContent="you clicked it";});
const web = document.querySelector("#web")
const button3 = document.querySelector("#loli")
button3.addEventListener("click", () => {web.textContent="Web developer";});
const button4 = document.querySelector("#change")
const card = document.querySelectorAll(".card")
 button4.addEventListener("click", function changeCard() {card.forEach(function (card) {card.textContent = "changed";
 })});
 const cards = document.querySelectorAll(".card")
 //cards.forEach(function name(cards) {cards.addEventListener("click", function name(params) 
    //{cards.style.backgroundColor = "red";});}); 
//cards.forEach(function (cards) {
   // cards.addEventListener("click", function name(params) {cards.classList.add("active");});});
cards.forEach(function (cards) {
    cards.addEventListener("click", function () {cards.classList.toggle("active");});});    
const projects = [
    {
        name: "portfolio website",
        type: "web",
        detail:"hmmm"
    },
    {
        name: "ardunio",
        type:"hardware",
        detail:"ardunio project"
    },
    {
        name:"delivery app",    
        type:"app",
        detail:"looool"
    }
];
const container = document.querySelector("#project");


//buh.classList.add("bah");
//buh.textContent ="portfolio website";

projects.forEach(cont => {
    
    const lam = document.createElement("div");
    const title1 = document.createElement("h3");
    title1.textContent = cont.name;
    lam.appendChild(title1);
    //lam.textContent = cont.name
    container.appendChild(lam);
    const details = document.createElement("p");
   
    details.classList.add("details");
    lam.appendChild(details);
    let showingType = false;
    lam.addEventListener("click", function () {
      // console.log(cont.name,cont.type);
        if (showingType === false) {
            title1.textContent = cont.name +"-"+cont.type;
            function showDetails(detail,details) {
                details.textContent = detail;
                
            }
            showDetails(cont.detail,details)
            // details.textContent = cont.detail;
            console.log(title1.textContent)
            console.log(lam.innerHTML)
           /* title1.style.display = "block"
            title1.style.color = "black"
            title1.style.fontSize = "20px"*/ 
            details.classList.add("active1");   
            lam.classList.add("active");
            showingType = true;
        } else {
            title1.textContent = cont.name;
            lam.classList.remove("active");
            details.classList.remove("active1");
            showingType = false;
        }
       
       

    });
    
    
    
});
const form = document.querySelector("#myform");
const nameinput = document.querySelector("#nameinput");
let items = []
const list = document.querySelector("#itemlist")
form.addEventListener("submit",function (event) {
    event.preventDefault();
    if (nameinput.value.trim() === "") {
        
        output.textContent = "error";
    } else {
       items.push(nameinput.value)
       list.innerHTML = "";
       items.forEach(function (item, index) {
        const li = document.createElement("li");
        li.textContent = item
        const deletbtn = document.createElement("button");
        deletbtn.textContent = "Delete";
        deletbtn.addEventListener("click", function () {
            items.splice(index, 1);
            list.innerHTML= "";
            items.forEach(function (item) {
                const li = document.createElement("li");
                li.textContent = item;
                list.appendChild(li);
            })
        })
        li.appendChild(deletbtn);
        list.appendChild(li);

       })
        
        }
       nameinput.value = ""; 
    
});
//const container1 = document.querySelector("#project1");
//const bah = document.createElement("div");
//bah.textContent = "ardunio";
//container.appendChild(bah);
//const container2 = document.querySelector("#project2");
//const bih = document.createElement("div");
//bih.textContent = "delivery app";
//container.appendChild(bih);

