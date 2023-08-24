document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os valores do email e senha
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validar se os campos estão preenchidos
    if (email.trim() === '' || password.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    };
    
    //Validar o formato do e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    };
    
    // Verificar se o email e senha são válidos
    if (email === "admin@admin.com" && password === "admin") {
        // Caso sejam válidos, redirecionar para a página desejada
        window.location.href = "./adminMenu.html";
    } else {
        // Caso contrário, exibir uma mensagem de erro
        alert("Email ou senha inválidos, tente admin@admin.com e admin");
    };
    
    return true;
});
