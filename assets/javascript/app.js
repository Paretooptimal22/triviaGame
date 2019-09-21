// array of landmarks and answers
const landArr = [
  {landmark1: [`Basilica La Sagrada Familia`, `Santiago de Compostela Cathedral`, `Santa Iglesia Catedral Primada de Toledo`, `Catedral de Sevilla`]
  },
  {landmark2: [`The Louvre`, `Arc de Triomphe`, `Guggenheim Museum`, `Grand Palais`]
  },
  {landmark3: [`Eiffel Tower`, `Tokyo Tower`, `CN Tower`, `Space Needle`]
  },
  {landmark4: [`The Woolworth Building`, `Chrysler Building`, `Flatiron Building`, `Lloyd's Building`]
  },
  {landmark5: [`Sydney Opera House`, `Metropolitan Opera House`, `Melbourne Opera House`, `Christchurch Opera`]
  },
  {landmark6: [`Marina Bay Sands`, `The Mira`, `Yas Hotel`, `W Barcelona`]
  },
  {landmark7: [`Tower Bridge`, `Twin Bridge`, `London Bridge`, `Charles Bridge`]
  },
  {landmark8: [`Pantheon`, `Roman Forum`, `Duomo di Milano`, `Capri`]
  },
  {landmark9: [`Brandenburg Gate`, `Arc de Triomphe`, `Merdian Gate`, `Golden Gate`]
  },
  {landmark10: [`Hagia Sophia`, `Alhambra`, `Mosque of Cordoba`, `Saint Basil's Cathedral`]
  }
]

// styling of begin button
document.getElementById(`beginBtn`).style.display = `block`

// counter for template literals
let count = 1

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
              <a class="waves-effect waves-light btn-small">${landArr[0].landmark1[0]}</a>
              <a class="waves-effect waves-light btn-small">${landArr[0].landmark1[0]}</a>
              <a class="waves-effect waves-light btn-small">${landArr[0].landmark1[0]}</a>
              <a class="waves-effect waves-light btn-small">${landArr[0].landmark1[0]}</a>
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





