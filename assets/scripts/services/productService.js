//GET
const listProducts = async () => {
    try {
        const response = await fetch("https://64da8814e947d30a260b5e1a.mockapi.io/geek");
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
};


// POST
async function createProduct(name, imageUrl, price, category, description) {
    const connection = await fetch("https://64da8814e947d30a260b5e1a.mockapi.io/geek", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            category: category,
            imageUrl: imageUrl,
            name: name,
            price: `${price}`,
            description: description
        })
    });
    const response = await connection.json();
    return response;
};

//PUT
async function editProduct(id, updatedProduct) {
    try{
        const connection = await fetch(`https://64da8814e947d30a260b5e1a.mockapi.io/geek/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        });
        const response = await connection.json();
        return response;
    }catch(erro) {
        return console.log(erro);
    };
};

//DELETE
async function deleteProduct(id) {
    try{
        const connection = await fetch (`https://64da8814e947d30a260b5e1a.mockapi.io/geek/${id}`,{
            method: "DELETE",
        });
        const response = await connection.json();
        return response;
    }catch(erro) {
        return console.log(erro);
    };
};

export const productService = {
    listProducts,
    createProduct,
    editProduct,
    deleteProduct
};





