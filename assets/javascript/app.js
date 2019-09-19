const play = () => {
  // array of landmarks and answers
  const landArr = [
    landmark1 = [`Basilica La Sagrada Familia`, `Santiago de Compostela Cathedral`, `Santa Iglesia Catedral Primada de Toledo`, `Catedral de Sevilla`]
    ,
    landmark2 = [`The Louvre`, `Arc de Triomphe`, `Guggenheim Museum`, `Grand Palais`]
    ,
    landmark3 = [`Eiffel Tower`, `Tokyo Tower`, `CN Tower`, `Space Needle`],

    landmark4 = [`The Woolworth Building`, `Chrysler Building`, `Flatiron Building`, `Lloyd's Building`]
    ,
    landmark5 = [`Sydney Opera House`, `Metropolitan Opera House`, `Melbourne Opera House`, `Christchurch Opera`]
    ,
    landmark6 = [`Marina Bay Sands`, `The Mira`, `Yas Hotel`, `W Barcelona`]
    ,
    landmark7 = [`Tower Bridge`, `Twin Bridge`, `London Bridge`, `Charles Bridge`]
    ,
    landmark8 = [`Pantheon`, `Roman Forum`, `Duomo di Milano`, `Capri`]
    ,
    landmark9 = [`Brandenburg Gate`, `Arc de Triomphe`, `Merdian Gate`, `Golden Gate`]
    ,
    landmark10 = [`Hagia Sophia`, `Alhambra`, `Mosque of Cordoba`, `Saint Basil's Cathedral`]
  ]

  let image1 = 1
  let image2 = 2
  let image3 = 3
  let image4 = 4

  document.addEventListener(`click`, event => {
    if (event.target.id === `beginBtn`) {
      let cardElem = document.createElement(`div`)
      cardElem.innerHTML = `
  <div class="col s12">
        <div class="card">
          <div class="card-image">
            <img src="./assets/images/image${image1}.jpg" alt="landmark">
            <span class="card-title">Name this landmark</span>
          </div>
          <div class="card-content center-align">
            <a class="waves-effect waves-light btn-small"></a>
            <a class="waves-effect waves-light btn-small"></a>
            <a class="waves-effect waves-light btn-small"></a>
            <a class="waves-effect waves-light btn-small"></a>
          </div>
        </div>
      </div>
  `
      document.getElementById(`cardHolder`).append(cardElem)
    }
  })

 

}

play()





