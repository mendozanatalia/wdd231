document.addEventListener('DOMContentLoaded', () => {
    renderMembers();
});

async function renderMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        const members = data.members;

        const gallery= document.querySelector('#member');

        members.forEach(member => {
            const card = document.createElement('section');
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
        gallery.appendChild(card);
    });

    } catch (error) {
        console.error('Error fetching members:', error);
    }
};