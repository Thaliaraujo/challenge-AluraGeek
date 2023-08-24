//loadHtml.js
async function loadHtml(filePath) {
  const response = await fetch(filePath);
  const html = await response.text();
  return html;
};

// Função para ocultar o botão admin e login do header.
function hideButtonOnIndexPage() {
  let currentPage = window.location.pathname; // Obtém o caminho da página atual

  // Verifica se a página é a página index.html
  if (currentPage === "index.html") {
     const adminLink = document.getElementById("adminLink");
     if (adminLink) {
       adminLink.style.display = "none";
    };
  } else if (currentPage === "/pages/addProduct.html") {
    const loginLink = document.getElementById("loginLink");
    if (loginLink) {
      loginLink.style.display = "none";
    };
  } else {
    const adminLink = document.getElementById("adminLink");
    if (adminLink) {
      adminLink.style.display = "none";
    };
    const loginLink = document.getElementById("loginLink");
    if (loginLink) {
      loginLink.style.display = "none";
    };
  };
};

// Carrega o conteúdo do arquivo header.html e footer.html e insere nas seções header e footer
async function loadHeader() {
  const headerContainer = document.getElementById("header");
  //const headerHtml = await loadHtml("../pages/header.html");
  const headerHtml = await loadHtml("/challenge-AluraGeek/pages/header.html");

  headerContainer.innerHTML = headerHtml;
  hideButtonOnIndexPage();
};

document.addEventListener("DOMContentLoaded", function() {
  hideButtonOnIndexPage(); // Chama a função ao carregar o DOM
});

async function loadFooter() {
  const footerContainer = document.getElementById("footer");
  //const footerHtml = await loadHtml("../pages/footer.html");
  const footerHtml = await loadHtml("/challenge-AluraGeek/pages/footer.html");
  footerContainer.innerHTML = footerHtml;
};

export { loadHeader, loadFooter, loadHtml };
