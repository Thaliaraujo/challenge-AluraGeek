import { productService } from "../services/productService";

const form = document.querySelector('[data-form-add-product]');

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const category = document.querySelector('[data-category]').value;
    const name= document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const description = document.querySelector('[data-description]').value;

    productService.createProduct(url, category, name, price, description)
    .then(Response => {
        window.location.href = "../pages/adminMenu.html"
        console.log(Response);
    }).catch (error => {
        console.log(error);
    });
});
