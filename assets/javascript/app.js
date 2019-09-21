// array of landmarks and answers
const landArr = [
  {landmark: [`Basilica La Sagrada Familia`, `Santiago de Compostela Cathedral`, `Santa Iglesia Catedral Primada de Toledo`, `Catedral de Sevilla`]
  },
  {landmark: [`The Louvre`, `Arc de Triomphe`, `Guggenheim Museum`, `Grand Palais`]
  },
  {landmark: [`Eiffel Tower`, `Tokyo Tower`, `CN Tower`, `Space Needle`]
  },
  {landmark: [`The Woolworth Building`, `Chrysler Building`, `Flatiron Building`, `Lloyd's Building`]
  },
  {
    landmark: [`Metropolitan Opera House`, `Melbourne Opera House`, `Christchurch Opera`, `Sydney Opera House` ]
  },
  {
    landmark: [`The Mira`, `Yas Hotel`, `Marina Bay Sands`, `W Barcelona`]
  },
  {landmark: [`Tower Bridge`, `Twin Bridge`, `London Bridge`, `Charles Bridge`]
  },
  {
    landmark: [`Roman Forum`, `Pantheon`, `Duomo di Milano`, `Capri`]
  },
  {
    landmark: [`Arc de Triomphe`, `Merdian Gate`, `Golden Gate`, `Brandenburg Gate`]
  },
  {landmark: [`Hagia Sophia`, `Alhambra`, `Mosque of Cordoba`, `Saint Basil's Cathedral`]
  }
]

// correct
const ans1 = `Basilica La Sagrada Familia` 
const ans2 = `The Louvre` 
const ans3 = `Tokyo Tower`
const ans4 = `Flatiron Building`
const ans5 = `Sydney Opera House`
const ans6 = `Marina Bay Sands`
const ans7 = `Tower Bridge`
const ans8 = `Pantheon`
const ans9 = `Brandenburg Gate`
const ans10 = `Hagia Sophia`

// styling of begin button
document.getElementById(`beginBtn`).style.display = `block`

// counter for template literals
let count = 1

let ansCount = 0

// create card element to play game
let cardElem = document.createElement(`div`)
cardElem.innerHTML = `
        <div class="col s12">
          <div class="card">
            <div class="card-image">
              <img src="./assets/images/image${count}.jpg" alt="landmark">
              <span class="card-title">Name this landmark</span>
            </div>
            <div class="card-content center-align">
              <div class="row">
                <a class="waves-effect waves-light btn-small col s6" href="#modal1">${landArr[0].landmark[0]}</a>
                <a class="waves-effect waves-light btn-small col s6" href="#modal1">${landArr[0].landmark[1]}</a>
              </div>
              <div class="row">
                <a class="waves-effect waves-light btn-small col s6" href="#modal1">${landArr[0].landmark[2]}</a>
                <a class="waves-effect waves-light btn-small col s6" href="#modal1">${landArr[0].landmark[3]}</a>
              </div>
            </div>
          </div>
        </div>
      `

// on click of button: display card element and hide button
const beginGame = () => {
  document.addEventListener(`click`, event => {
    count++
    if (event.target.id === `beginBtn`) {
      document.getElementById(`cardHolder`).append(cardElem)
      document.getElementById(`beginBtn`).style.display = `none`
    }
  })
}

beginGame()

// display modal on click with answer
const renderAnswer = () => {
  document.addEventListener(`click`, event => {
    if (event.target.className === `waves-effect waves-light btn-small col s6`) {
      ansCount++
      

    }
  })
}

renderAnswer()

