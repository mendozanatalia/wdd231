// Get current year
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

// Get last modified
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;