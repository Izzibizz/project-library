/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/
const destinationDiv = document.getElementById('load-destinations')


const destinations = [
  {
    name: 'Isle of Skye',
    country: 'Scotland',
    language: 'English',
    accessibility: 'Difficult',
    rating: 4.2,
    temperature: 7,
    description:
      'Skye is a world class destination for walkers and climbers. The Cuillin Range and The Trotternish Ridge offer challenging climbs and interesting scrambles.',
    image: './destinations-images/isle-of-skye-scottland.jpg'
  },
  {
    name: 'Taormina',
    country: 'Italy',
    language: 'Italian',
    accessibility: 'Easy',
    rating: 4.2,
    temperature: 25,
    description:
      'Beautifully restored mediaeval buildings, breathtaking views around every corner and a giddy network of winding streets strewn with shops, bars and restaurants make for a perfect holiday spot.',
    image: './destinations-images/Taormina-italy.jpg'
  },
  {
    name: 'Purnululu',
    country: 'Australia',
    language: 'English',
    accessibility: 'Difficult',
    rating: 4.4,
    temperature: 35,
    description:
      'Check out the 350-million-year-old, striped sandstone domes of the Bungle Bungle Range from ground level or in the air. Wander along ancient creek beds and through striking gorges that transform into a golden paradise late in the day.  ',
    image: './destinations-images/purnululu-aus.jpg'
  },
  {
    name: 'Xochimilco lake',
    country: 'Mexico',
    language: 'spanish',
    accessibility: 'easy',
    rating: 4.0,
    temperature: 27,
    description:
      'The colorful, flowery, and highly decorated trajineras are some of the distinctive features of this important place of the Mexican culture, where chinampas crops remain, and farmers move by sailing through the canals while enduring their traditions and celebrations.',
    image: './destinations-images/xochimilco-lake-mexico.jpg'
  },
  {
    name: 'Uluru',
    country: 'Australia',
    language: 'English',
    accessibility: 'Difficult',
    rating: 5.0,
    temperature: 39,
    description:
      'Uluru is world famous for its amazing rock paintings. The rock art and countless petroglyphs around Ulurus caves have many layers of symbols and figures painted on top of each other because these are sites that have been used as a part of Anangu education for thousands of years.',
    image: './destinations-images/Uluru-australia.jpg'
  },
  {
    name: 'Marble Cathedral',
    country: 'Chile',
    language: 'Spanish',
    accessibility: 'Difficult',
    rating: 4.6,
    temperature: 12,
    description:
      'Drift between pure marble columns, through smooth arches that have been carved out over thousands of years. The water beneath is an almost luminescent turquoise, and the light reflects across the soft pinks, blues and greens that run through the marble.',
    image: './destinations-images/marble-cathedral-chile.jpg'
  },
  {
    name: 'Danxia Landform',
    country: 'China',
    language: 'Chinese',
    accessibility: 'Moderate',
    rating: 5.0,
    temperature: 7,
    description:
      'Characterized by spectacular red cliffs and a range of erosional landforms, including dramatic natural pillars, towers, ravines, valleys and waterfalls.',
    image: './destinations-images/danxia landform geological park china.jpg'
  },
  {
    name: 'Abisko',
    country: 'Sweden',
    language: 'Swedish',
    accessibility: 'Moderate',
    rating: 4.5,
    temperature: -7,
    description:
      'This beautiful region is perfectly situated to host some of the most amazing Northern Lights viewing, as well as being home to fascinating natural wonders and vibrant Swedish Lapland culture.',
    image: './destinations-images/abisko-national-park-sweden.jpg'
  },
  {
    name: 'Larung gar',
    country: 'Tibet',
    language: 'Tibetan',
    accessibility: 'Moderate',
    rating: 4.9,
    temperature: 6,
    description:
      'A sea of red: red houses, red Buddhist gowns is what you’ll find in Larung Gar Buddhist Academy. There are thousands of small red houses on the slope surrounding the academy. ',
    image: './destinations-images/Larung-gar-Tibet.jpg'
  },
  {
    name: 'Wangxian Valley',
    country: 'China',
    language: 'Chinese',
    accessibility: 'Fiction',
    rating: 4.1,
    temperature: 8,
    description:
      'Wangxian is famous for its houses hanging from its cliff. Integrating landscapes, outdoor rafting, culture and folk experience all in one.',
    image: './destinations-images/wangxian-valley-china.jpg'
  },
]

//Skapa funktion som laddar array in i html
const loadDestinations = (destinations) => {
    destinationDiv.innerHTML = ""
    destinations.forEach((x) => {
    destinationDiv.innerHTML += `
    <div class="container">
      <h4>"${x.name}"<span>"${x.country}</span></h4>
      <img src="${x.image}">
      <div class="description-text"><p>"${x.description}"</p></div>
      </div>
    `
    console.log(destinations)
    console.log(destinationDiv.innerHTML)
    })
}

loadDestinations(destinations)


   



/*
const loadPokemons = (pokemons) => {  
  pokeCard.innerHTML = ''
  favorites.innerHTML = ''
//Structure of the Pokémon library
  pokemons.forEach((pokemon) => {
    pokeCard.innerHTML += `
    <div class="card">
    <h3>${pokemon.name}</h3>
            <span>${pokemon.type}</span>
    <div class="content-container">
      <div class="image-container">
        <img src="${pokemon.image}" alt="${pokemon.name}" class="poke-img"/>
      </div>
      <div class="text-container">
      <span>Category: ${pokemon.category}</span>
        <p>${pokemon.description}</p>
        <ul class="list">
          <li>HP: ${pokemon.HP}</li>
          <li>Attack: ${pokemon.attack}</li>
          <li>Defense: ${pokemon.defense}</li>
          <li>Speed: ${pokemon.speed}</li>
        </ul>
      </div>
      </div>
      `
  })
}
      
      */