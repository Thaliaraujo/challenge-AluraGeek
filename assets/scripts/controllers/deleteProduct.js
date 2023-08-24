import { productService } from "../services/productService.js";

// Função criar popup excluir produto
export function createPopupDelete(id) {
    const product = document.querySelector(`[data-id="${id}"]`)
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
        <p>Confirma a exclusão deste produto?</p>
        <button class="confirm">confirmar</button>
        <button class="cancel">cancelar</button>
    `;

    const confirmBtn = popup.querySelector(".confirm");
    const cancelBtn = popup.querySelector(".cancel");

    confirmBtn.addEventListener("click", async () => {
        try {
            await productService.deleteProduct(id);
            const product = document.querySelector(`[data-id="${id}"]`);
            product.remove();
            popup.remove();
            window.location.reload();
        } catch (erro) {
            console.log(erro);
        }
    });

    cancelBtn.addEventListener("click", () => {
        popup.remove();
    });

    product.appendChild(popup);
};

document.addEventListener("click", (event) => {
    const buttonDelete = event.target.closest("[data-button-delete]");
    if (buttonDelete) {
        const id = buttonDelete.closest("[data-id]").dataset.id;
        createPopupDelete(id);
    };
});
