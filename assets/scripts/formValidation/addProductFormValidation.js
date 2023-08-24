//Validação Formulário Adicionar Produto
export function validationForm() {
    const imageUrl = document.querySelector('[data-url]').value;
    const category = document.querySelector('[data-category]').value.toLowerCase();
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const description = document.querySelector('[data-description]').value;

    let isValid = true;

    function isValidURL(url) {
        // Uma regex para verificar URLs
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlPattern.test(url);
    };    

    if (imageUrl === "") {
        displayError('imageUrl', 'Por favor, insira a URL da imagem.');
        isValid = false;
    } else if (!isValidURL(imageUrl)) {
        displayError('imageUrl', 'Por favor, insira uma URL válida.');
        isValid = false;
    } else {
        hideError('imageUrl');
    };

    if (category === "") {
         displayError('category', 'Por favor, insira uma categoria.');
         isValid = false;
    } else if (!['starwars', 'consoles', 'diversos'].includes(category)) {
         displayError('category', 'A categoria não está definida, por favor, insira uma categoria válida.');
         isValid = false;
    } else {
        hideError('category');
    };

    if (name === "") {
        displayError('name', 'Por favor, insira o nome do produto.');
        isValid = false;
    } else {
        hideError('name');
    };

    if (price === "") {
        displayError('price', 'Por favor, insira o preço do produto.');
        isValid = false;
    } else if (!/^[\d.,]+$/.test(price)) {
        displayError('price', 'O preço deve conter apenas números, virgula ou ponto.');
        isValid = false;
    } else if ((price.match(/\./g) || []).length > 1 || (price.match(/,/g) || []).length > 1) {
        displayError('price', 'O preço deve ter apenas uma vírgula ou um ponto decimal.');
        isValid = false;
    } else {
        hideError('price');
    };

    if (description === "") {
        displayError('description', 'Por favor, insira a descrição do produto.');
        isValid = false;
    } else {
        hideError('description');
    };

    return isValid;
};

// exibe a mensagem de erro
export function displayError(field, message) {
    const errorElement = document.querySelector(`[data-error="${field}"]`);
    errorElement.innerHTML = message;
    errorElement.style.display = 'block';
};

//oculta a mensagem quando o campo é preenchido corretamente
export function hideError(field) {
    const errorElement = document.querySelector(`[data-error="${field}"]`);
    errorElement.innerHTML = '';
    errorElement.style.display = 'none';
};

export default function validaForm() {
    validationForm();
    displayError();
    hideError();
}
