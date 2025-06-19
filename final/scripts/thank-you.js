document.addEventListener("DOMContentLoaded", () => {
    const getString = window.location.search;
    const info = new URLSearchParams(getString);
    const timestamp = info.get("timestamp");

    document.querySelector('#summary-box').innerHTML = `
        <h2>Information</h2>
        <div>
            <p><strong>First Name: </strong>${info.get('first')}</p>
            <p><strong>Last Name: </strong>${info.get('last')}</p>
            <p><strong>Email: </strong>${info.get('email')}</p>
            <hr>
            <p><strong>Submitted At: </strong>${timestamp ? new Date(timestamp).toLocaleString() : "Not Provided"}</p>
            <hr>
            <br>
            <a href="./contact.html" class="btn">Return to Website</a>
        </div>
    `;
});
