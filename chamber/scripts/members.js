let members = [];

document.addEventListener('DOMContentLoaded', () => {
    getMembersData();
});

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const container = document.querySelector('#member');

gridButton.addEventListener("click", () => {
    displayMembersGrid(members);
})

listButton.addEventListener("click", () => {
    displayMembersList(members);
})

// GET DATA
async function getMembersData() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        members = data.members; // Here I am using the global variable

        displayMembersGrid(members);

    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

// GRID VIEW
function displayMembersGrid(members) {
    const container = document.querySelector('#member');
    container.innerHTML = ''; 
    container.classList.add('grid');
    container.classList.remove('list');

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member', 'card');

        card.innerHTML = `
            <div class="member-name">
                <h2>${member.name}</h2>
                <hr>
            </div>
            
            <div class="member-info">
                <div>
                <img src="${member.image_url}" alt="Portrait of ${member.name}" loading="lazy">
                </div>
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

// LIST VIEW
function displayMembersList(members) {
    const container = document.querySelector('#member');
    container.innerHTML = ''; 
    container.classList.add('list');
    container.classList.remove('grid');

    members.forEach(member => {
        const row = document.createElement('div');
        row.classList.add('member', 'list-item');

        row.innerHTML = `
            <strong>${member.name}</strong>
            <p>${member.address}</p>
            <p>${member.phone_number}</p>
            <p>${member.facebook}</p>
        `;
        container.appendChild(row);
    });
};