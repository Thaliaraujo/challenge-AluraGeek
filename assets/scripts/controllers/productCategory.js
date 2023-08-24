import { productService } from "../services/productService.js";

const newProduct = (name, imageUrl, alt, price, id) => {
    const card = document.createElement("div")
    const content = `
        <div class="products__product">
            <img class="products__product__image" src="${imageUrl}" alt="Produto">
            <p class="products__product__text">${name}</p>
            <h3 class="products__product__price">${price}</h3>
            <a class="products__product__link" href="./pages/productDetails.html?id=${id}">Ver produto</a>
        </div>
    `

    card.innerHTML = content;
    return card;
};


async function displayProductCategory() {
    const listApi = await productService.listProducts();

    const productCategory = {
        starwars: [],
        consoles: [],
        diversos: [],
    };

    listApi.forEach((product) => {
        productCategory[product.category.toLowerCase()].push(product);
    });

    Object.keys(productCategory).forEach((category) => {
        const categoryContainer = document.querySelector(`[data-category="${category}"] .card`);
        if (categoryContainer) {
            productCategory[category].forEach((product) => {
                categoryContainer.appendChild(
                    newProduct(product.name, product.imageUrl, product.alt, product.price, product.category, product.id)
                );
            });
        }
    });
}

displayProductCategory();
