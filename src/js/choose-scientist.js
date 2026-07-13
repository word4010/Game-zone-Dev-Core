const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];
const card = document.querySelector(".div-ul-scientist")
function createLi(scientists) {
  card.innerHTML = ""
  scientists.forEach((scientist) => {
    const cardItem = document.createElement("li")
    const name = document.createElement("p")
    const life = document.createElement("p")
    name.textContent = `${scientist.name} ${scientist.surname}`
    life.textContent = `${scientist.born} - ${scientist.dead}`
    cardItem.style.width = "100px"
    cardItem.style.height = "100px"
    cardItem.style.backgroundColor = "rgba(217, 217, 217, 1)"
    cardItem.style.borderRadius = "20px"
    name.style.fontSize = "8px"
    life.style.fontSize = "8px"
    name.style.fontWeight = "400"
    life.style.fontWeight = "400"
    name.style.fontFamily = "var(--font-family)"
    life.style.fontFamily = "var(--font-family)"
    name.style.textAlign = "center"
    life.style.textAlign = "center"
    name.style.paddingTop = "41px"
    cardItem.classList.add("card")
    cardItem.append(name, life)
    card.append(cardItem)
  })
}
createLi(scientists)
const p1 = document.querySelector('.scientist-div-p-1')
p1.addEventListener("click", bornIn19ST)
function bornIn19ST() {
  const whobornIn19ST = scientists.filter((human) => {
    return 1800 <= human.born && human.born <= 1900
  })
  createLi(whobornIn19ST)
}


const p2 = document.querySelector(".scientist-div-p-7")
p2.addEventListener("click", futureborned)
function futureborned() {
  const orderYearsArrB = scientists.sort((a, b) => {
    return b.born - a.born
  })
 createLi([orderYearsArrB[0]])
 console.log(orderYearsArrB)
}

const p3 = document.querySelector(".scientist-div-p-3")
p3.addEventListener("click", sortByAlfabet)
function sortByAlfabet(){
  const sorted = scientists.sort((a, b) => {
    return a.surname.localeCompare(b.surname)
  })
createLi(sorted)
}

const p4 = document.querySelector(".scientist-div-p-5")

p4.addEventListener("click", orderYears)
function orderYears() {
  const orderYearsArrA = scientists.sort((a, b) => {
    const lifeYearsA = a.dead - a.born
    const lifeYearsB = b.dead - b.born
    return lifeYearsA - lifeYearsB
  });
  createLi(orderYearsArrA)
}

const p5 = document.querySelector(".scientist-div-p-2")
p5.addEventListener("click", yearsOfAlbertEnstein)
function yearsOfAlbertEnstein() {
  const AlbertEnsteinYears = scientists.find((scientist) => {
    return scientist.name === "Albert"
  })
  createLi([AlbertEnsteinYears])
}

const p6 = document.querySelector(".scientist-div-p-4")
p6.addEventListener("click", StartC)
function StartC() {
  const chelC = scientists.filter((chel) => {
    return chel.name.startsWith("C") || chel.surname.startsWith("C")
  })
  createLi(chelC)
  console.log(chelC)
}

const p7 = document.querySelector(".scientist-div-6")
p7.addEventListener("click", noA)
function noA() {
  const filteredScientists = scientists.filter((scientist) => {
    return (
      !scientist.name.startsWith("A") && !scientist.surname.startsWith("A")
    )
  })
  createLi(filteredScientists);
}

const p8 = document.querySelector(".scientist-div-p-8")
p8.addEventListener("click", timeOfLife)
function timeOfLife() {
  const sorted = [...scientists].sort((b, a) => {
    return a.dead - a.born - (b.dead - b.born)
  })
  createLi([sorted[0], sorted[sorted.length - 1]])
}

const p9 = document.querySelector(".divv-p")
p9.addEventListener("click", izgoy)
function izgoy(){
  const filteredScientists = scientists.filter(
    ({ name, surname }) =>
      name && surname && name[0].toLowerCase() === surname[0].toLowerCase(),
  )
  createLi(filteredScientists)
}