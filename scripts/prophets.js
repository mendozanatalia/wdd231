const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const gallery = document.querySelector('#gallery');


async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets); 
}

getProphetData(url);


const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {

    let card = document.createElement('div');
    card.classList.add("card");

    let fullName = document.createElement('h2');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let portrait = document.createElement('img');

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); 
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);    
    card.appendChild(portrait);

    gallery.appendChild(card);
  }); 
}