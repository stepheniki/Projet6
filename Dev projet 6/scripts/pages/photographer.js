// PAGE PHOTOGRAPHE - JS
// ----------------------------------------------------------------------

//Récuperer données du fichier .json
async function getPhotographers() {
  const response = await fetch("./data/photographers.json");
  return await response.json();
};
async function getMedias() {
  const mediaResponse = await fetch("./data/photographers.json");
  return await mediaResponse.json();
};

// Récupérer id du photographe
async function displayData(photographers, id) {
  const photographer = photographers.find(element => element.id == id);
  photographerFactory(photographer);
};

// Récupère les datas des photographes
async function init() {
  const { photographers } = await getPhotographers();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

  // afficher données photographes + id
  displayData(photographers, id);
};
init();



// Importer les données (data) :
function photographerFactory(data) {
  const { name, portrait, tagline, city, country, price, id } = data;
  const photographersSection = document.querySelector('.photograph-header');
  const picture = `assets/photographers/${portrait}`;
  const tag = `${tagline}`;

  // Ajout du html dans la section "photograph-header"
  photographersSection.innerHTML = `
       <div>
       <h2>${name}</h2>
       <p class="photographer-city">${city}, ${country}</p>
       <p class="photographer-description">${tag}</p>
       </div>
          <div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
          </div>
        <div>
       <img src="${picture}" />
       </div> 
  `
  const portfolioSection = document.querySelector('.portfolio-section');

  portfolioSection.innerHTML = `
       <div>
       <h2>${name}</h2>
      
       </div>
                    
  `
};