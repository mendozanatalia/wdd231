const modal = document.querySelector('#course-details');
const openModal = document.querySelector('#open-btn');
const closeModal = document.querySelector('#close-btn');

function displayCourseDetails(course) {
    details.innerHTML = '';
    details.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits: </strong>${course.credits}</p>
    <p><strong>Certificate: </strong>${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies: </strong>${course.technology}</p>
    `;
    details.showModal();
    
    closeModal.addEventListener("click", () => {
        details.close();
    });
}