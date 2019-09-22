// array of landmarks and answers
const landArr = [
  {
    landmark: [`Basilica La Sagrada Familia`, `Santiago de Compostela Cathedral`, `Santa Iglesia Catedral Primada de Toledo`, `Catedral de Sevilla`]
  },
  {
    landmark: [`The Louvre`, `Arc de Triomphe`, `Guggenheim Museum`, `Grand Palais`]
  },
  {
    landmark: [`Eiffel Tower`, `Tokyo Tower`, `CN Tower`, `Space Needle`]
  },
  {
    landmark: [`The Woolworth Building`, `Chrysler Building`, `Flatiron Building`, `Lloyd's Building`]
  },
  {
    landmark: [`Metropolitan Opera House`, `Melbourne Opera House`, `Christchurch Opera`, `Sydney Opera House`]
  },
  {
    landmark: [`The Mira`, `Yas Hotel`, `Marina Bay Sands`, `W Barcelona`]
  },
  {
    landmark: [`Tower Bridge`, `Twin Bridge`, `London Bridge`, `Charles Bridge`]
  },
  {
    landmark: [`Roman Forum`, `Pantheon`, `Duomo di Milano`, `Capri`]
  },
  {
    landmark: [`Arc de Triomphe`, `Merdian Gate`, `Golden Gate`, `Brandenburg Gate`]
  },
  {
    landmark: [`Hagia Sophia`, `Alhambra`, `Mosque of Cordoba`, `Saint Basil's Cathedral`]
  }
]

// correct
const answers = [`Basilica La Sagrada Familia`, `The Louvre`, `Tokyo Tower`, `Flatiron Building`, `Sydney Opera House`, `Marina Bay Sands`, `Tower Bridge`, `Pantheon`, `Brandenburg Gate`, `Hagia Sophia`]

// styling of begin button
document.getElementById(`beginBtn`).style.display = `block`

// create card element to play game
let count = -1
let imageCount = 0

const renderCard = () => {
  count++
  imageCount++
  document.getElementById(`pic`).innerHTML = `<img id="image" src="./assets/images/image${imageCount}.jpg" alt="landmark">`
  document.getElementById(`choice1`).textContent = `${landArr[count].landmark[0]}`
  document.getElementById(`choice2`).textContent = `${landArr[count].landmark[1]}`
  document.getElementById(`choice3`).textContent = `${landArr[count].landmark[2]}`
  document.getElementById(`choice4`).textContent = `${landArr[count].landmark[3]}`
}

// on click of button: display card element and hide button
const beginGame = () => {
  document.addEventListener(`click`, event => {
    if (event.target.id === `beginBtn`) {
      document.getElementById(`beginBtn`).style.display = `none`
      renderCard()
    }
  })
}

beginGame()

// initialize modal
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
})

// display modal when player clicks choice and answer confirmed
const renderAnswer = () => {
  let ansCount = -1
  document.addEventListener(`click`, event => {
    if (event.target.className === `waves-effect waves-light btn-small modal-trigger col s6`) {
      ansCount++
      if (answers.includes(event.target.textContent)) {
        document.getElementById(`confirm`).innerHTML = `CORRECT!`
      } else {
        document.getElementById(`confirm`).innerHTML = `WRONG!`
        document.getElementById(`ans`).innerHTML = `The Landmark is ${answers[ansCount]}`
      }
    }
    
  })
}

renderAnswer()

// render next question when modal is closed
document.addEventListener(`click`, event => {
  if (event.target.id === `modalBtn`) {
    renderCard()
  }
})

