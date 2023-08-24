import { productService } from "../services/productService.js";

function createProduct(name, imageUrl, alt, price, id) {
    const card = document.createElement("div")
    const content = `
        <div class="products__product" data-id="${id}">
            <div class="container__image">
                <button type="button" class="delete" data-button-delete></button>
                <a href="../pages/editProduct.html?id=${id}"><button type="button" class="edit" data-button-edit></button></a>
                <img class="products__product__image" src="${imageUrl}" alt="${alt}">
            </div>
            <p class="products__product__text">${name}</p>
            <h3 class="products__product__price">${price}</h3>
            <a class="products__product__link" href="./pages/productDetails.html?id=${id}">Ver produto</a>
        </div>
    `

    card.innerHTML = content;
    return card;
};

const productsContainer = document.querySelector("[data-products] .card");
async function displayProducts() {
    const listApi = await productService.listProducts();
    listApi.forEach(item => {
        const card = createProduct(item.name, item.imageUrl, item.alt, item.price, item.id);
        productsContainer.appendChild(card);
    });
};

displayProducts();

export { createProduct, productsContainer };
