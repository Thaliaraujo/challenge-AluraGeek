import { productService } from "../services/productService.js";
import { validationForm} from "../formValidation/addProductFormValidation.js";
import {createProduct, productsContainer} from "../controllers/allProducts.js";

async function addProduct() {
    const imageUrl = document.querySelector("[data-url]").value;
    const category = document.querySelector("[data-category]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;

   //Adicione a nova linha abaixo para criar o produto na API
    const newProduct = await productService.createProduct(name, imageUrl, price, category, description);
    
   //A partir do novo produto criado, você pode criar o cartão e adicioná-lo ao contêiner
    const newCard = createProduct(newProduct.name, newProduct.imageUrl, newProduct.price, newProduct.id);
    productsContainer.appendChild(newCard);
};

const formAddProduct = document.querySelector("[data-form-add-product]");
formAddProduct.addEventListener("submit", async evento => {
    evento.preventDefault();
    const validatedForm = validationForm();
    if (validatedForm) {
        await addProduct();
        window.location.href = "../pages/adminMenu.html";
    }
});
