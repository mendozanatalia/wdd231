let members = [];

document.addEventListener('DOMContentLoaded', () => {
    getMembersData();
});

async function getMembersData() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        members = data.members; // Here I am using the global variable

        const featuredMembers = data.members.filter(member =>
            member.membership_level.toLowerCase() === 'gold' ||
            member.membership_level.toLowerCase() === 'silver'
        );

        const selected = getRandomItems(featuredMembers, 3);
        displaySpotlights(selected);

    } catch (error) {
        console.error('Error fetching spotlight members data:', error);
    }
}

function getRandomItems(array, count) {
    const r = array.sort(() => 0.5 - Math.random());
    return r.slice(0, count);
}

function displaySpotlights(members) {
    const container = document.querySelector('#spotlights');
    container.innerHTML = ''; 

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('card', 'member');

        card.innerHTML = `
            <h2>${member.name}</h2>
            <hr>
            <div class="info-horizontal">
                <img src="${member.image_url}" alt="Portrait of ${member.name}" loading="lazy">
                <div>
                    <p><strong>PHONE:</strong> ${member.phone_number}</p>
                    <p><strong>EMAIL:</strong> ${member.email}</p>
                    <p><strong>FACEBOOK:</strong> ${member.facebook}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
};
