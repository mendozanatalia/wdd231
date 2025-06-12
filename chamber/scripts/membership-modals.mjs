import { membershipLevels } from "./membership-array.mjs";

const container = document.querySelector("#membership-gallery");
const dialog = document.querySelector("#learn-more");
const titleContainer = document.querySelector("#dialog-title");
const title = titleContainer.querySelector("h2");
const close = titleContainer.querySelector("button");
const info = dialog.querySelector("p");

function renderCards(data) {
    data.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card", "membership");

        const name = document.createElement("h3");
        name.textContent = item.name;

        const link = document.createElement("a");
        link.textContent = "Learn more";
        link.classList.add("more");
        link.addEventListener("click", () => showDialog(item));

        container.appendChild(card);
        card.appendChild(name);
        card.appendChild(link);
    });
}

function showDialog(item) {
    title.textContent = item.name;

    const benefitsList = item.benefits
        .map(benefit => `• ${benefit}`)
        .join("<br>");

    info.classList.add("info-vertical");
    info.innerHTML = `
        <p>${item.note}</p>
        <p><strong>Price:</strong> $${item.price} / year</p>
        <p><strong>Best for:</strong> ${item.bestFor}</p>
        <strong>Benefits:</strong>${benefitsList}<br>
    `;

    dialog.showModal();
}

close.addEventListener("click", () => dialog.close());

renderCards(membershipLevels);