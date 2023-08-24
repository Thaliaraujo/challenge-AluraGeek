import { productService } from "../services/productService.js";

async function editProduct() {
    const paramsUrl = new URLSearchParams(window.location.search);
    const idProduct = paramsUrl.get("id");

    const imageUrl = document.querySelector("[data-image]").value;
    const category = document.querySelector("[data-category]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;
    
    const updatedProduct = {
        category: category,
        imageUrl: imageUrl,
        name: name,
        price: `${price}`,
        description: description
    };

    await productService.editProduct(idProduct, updatedProduct);
    console.log(idProduct)
};

editProduct();