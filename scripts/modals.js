import { courses } from ".scripts/courses-data.mjs";
// console.log(courses);

const showHere = document.querySelector('#show-here');
const dialog = document.querySelector('#course-details');
const title = document.querySelector('#course-details h2');
const closeBtn = document.querySelector('#course-details button');
const info = document.querySelector('#course-details p');

closeBtn.addEventListener("click", () => dialog.close())

function displayCourseDetails(data) {
    console.log(data)
}

displayCourseDetails(courses);

    // details.innerHTML = `
    // <button id="closeBtn">❌</button>
    // <h2>${course.subject} ${course.number}</h2>
    // <h3>${course.title}</h3>
    // <p><strong>Credits: </strong>${course.credits}</p>
    // <p><strong>Certificate: </strong>${course.certificate}</p>
    // <p>${course.description}</p>
    // <p><strong>Technologies: </strong>${course.technology}</p>
    // `;