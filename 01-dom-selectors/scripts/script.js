console.log("JS loaded")

console.log(
    document.querySelector("div.first-div").innerText,
    "\n",
    document.querySelector("div.first-div + div").innerText
)

const firstDiv =  Array.from(document.getElementsByClassName("first-div"))

console.log("firstDiv", firstDiv.length)

firstDiv.forEach(console.log)

const divs = document.querySelectorAll("div")

divs.forEach(console.log)

const secondDiv = document.getElementById("second-div")

console.log("second-div", secondDiv);

// --------- Test for Equality ---------

const cards = Array.from(document.getElementsByClassName("card"))

console.log(
    divs[0] === cards[0]
)

cards.forEach(card => card.innerText += "and I have been modified" )

// --------- Selecting on a branch (element inside document) ---------

console.log(divs[0].querySelector("p"))