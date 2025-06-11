document.addEventListener("DOMContentLoaded", () => {
    const getString = window.location.search;
    const info = new URLSearchParams(getString);
    const timestamp = info.get("timestamp");

    document.querySelector('#summary-box').innerHTML = `
        <h2>Information</h2>
        <div class="info-vertical">
            <p><strong>First Name: </strong>${info.get('first')}</p>
            <p><strong>Last Name: </strong>${info.get('last')}</p>
            <p><strong>Email: </strong>${info.get('email')}</p>
            <p><strong>Phone Number: </strong>${info.get('phone')}</p>
            <p><strong>Membership Level: </strong>${info.get('membership')}</p>
            <p><strong>Business/Organization's Name: </strong>${info.get('org-name')}</p>
            <p><strong>Applicant's Organization Title: </strong>${info.get('apl-title')}</p>
            <p><strong>Organization Description: </strong>${info.get('org-desc')}</p>
            <hr>
            <p><strong>Submitted At: </strong>${timestamp ? new Date(timestamp).toLocaleString() : "Not Provided"}</p>
            <hr>
            <a href="./join.html" class="btn">Return to Website</a>
        </div>
    `;
});
