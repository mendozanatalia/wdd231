let products = [];

document.addEventListener('DOMContentLoaded', () => {
    getData();

    document.getElementById("plushies").addEventListener("click", () => {
        const plushiesProducts = filterProducts("Plushies");
        displayCards(plushiesProducts);
        document.querySelector("#tab-title").textContent = `Plushies (${plushiesProducts.length})`;
    });

    document.getElementById("jewelry").addEventListener("click", () => {
        const jewelryProducts = filterProducts("Jewelry");
        displayCards(jewelryProducts);
        document.querySelector("#tab-title").textContent = `Jewelry (${jewelryProducts.length})`;
    });

    document.getElementById("notebooks").addEventListener("click", () => {
        const notebookProducts = filterProducts("Notebooks");
        displayCards(notebookProducts);
        document.querySelector("#tab-title").textContent = `Notebooks (${notebookProducts.length})`;
    });

    document.getElementById("all").addEventListener("click", () => {
        displayCards(products);
        document.querySelector("#tab-title").textContent = `All Products (${products.length})`;
    });
});

async function getData() {
    try {
        const response = await fetch('data/products.json');
        const data = await response.json();
        products = data.products;

        displayCards(products); // solo se llama aquí una vez
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayCards(data) {
    const gallery = document.querySelector('#catalog');
    gallery.innerHTML = ""; // limpia antes de renderizar

    data.forEach(x => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${x.image}" alt="${x.name}" loading="lazy">
            <h3>${x.name}</h3>
            <p><strong>Price:</strong> ${x.price}</p>
            <p><strong>Dimensions:</strong> ${x.dimensions}</p>
            <p><strong>Material:</strong> ${x.material}</p>
        `;

        gallery.appendChild(card);
    });
}

function filterProducts(condition) {
    return condition === "All" 
        ? products 
        : products.filter(product => product.category === condition);
}