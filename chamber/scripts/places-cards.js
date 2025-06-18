let places = [];

document.addEventListener('DOMContentLoaded', () => {
    getData();
});

async function getData() {
    try {
        const response = await fetch('data/places.json');
        const data = await response.json();
        places = data.places;

        displayCards(places);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayCards(data) {
    const container = document.querySelector("#places");

    data.forEach(x => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.innerText = x.name;
        card.appendChild(title);

        const info = document.createElement('div');
        info.classList.add('info');

        // PHOTO
        const photo = document.createElement('img');
        photo.src = x.image;
        photo.alt = x.name;
        info.appendChild(photo);

        // DESCRIPTION
        const description = document.createElement('p');
        description.innerText = x.description;
        info.appendChild(description);

        // ADDRESS
        const address = document.createElement('address');
        address.innerText = x.address;
        info.appendChild(address);

        // BUTTON
        const btn = document.createElement('button');
        btn.innerText = "Learn More";
        info.appendChild(btn);

        card.appendChild(info);
        container.appendChild(card);
    });
}