import { deliveryMethods } from "./delivery-methods.mjs";

const container = document.querySelector(".delivery .gallery");
const dialog = document.querySelector("#learn-more");
const titleContainer = document.querySelector("#dialog-title");
const title = titleContainer.querySelector("h2");
const close = titleContainer.querySelector("button");
const info = dialog.querySelector("p");

function renderDeliveryCards(data) {
    data.forEach((method) => {
        const card = document.createElement("div");
        card.classList.add("card", "delivery-card");

        const img = document.createElement("img");
        img.src = method.image;
        img.alt = method.name;

        const name = document.createElement("h3");
        name.textContent = method.name;

        const link = document.createElement("a");
        link.textContent = "Learn more";
        link.classList.add("btn");
        link.addEventListener("click", () => showDialog(method));

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(link);
        container.appendChild(card);
    });
}

function showDialog(method) {
    title.textContent = method.name;
    info.textContent = method.description;
    dialog.showModal();
}

close.addEventListener("click", () => dialog.close());

renderDeliveryCards(deliveryMethods);