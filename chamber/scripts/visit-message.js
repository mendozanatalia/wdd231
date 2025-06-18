document.addEventListener("DOMContentLoaded", () => {
    displayVisitMessage();
});

function displayVisitMessage() {
    const visitMessage = document.getElementById("visit-message");
    const now = Date.now();
    const lastVisit = localStorage.getItem("lastVisit");
    let message = "";

    if (lastVisit === null) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = Number(lastVisit);
        const difference = now - lastVisitTime;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        if (days < 1) {
            message = "Back so soon! Awesome!";
        } else if (days === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = "You last visited " + days + " days ago.";
        }
    }

    visitMessage.textContent = message;
    localStorage.setItem("lastVisit", now);
}