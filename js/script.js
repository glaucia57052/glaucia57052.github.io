// APLICAR TEMA SALVO AO CARREGAR
window.onload = function () {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "dark") {
        document.body.classList.add("dark");
    }
};

// TOGGLE DARK MODE + SALVAR
function toggleDarkMode() {
    const body = document.body;

    body.classList.toggle("dark");

    // salva no navegador
    if (body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }
}

// ACESSIBILIDADE
function aumentarFonte() {
    document.body.style.fontSize = "larger";
}

function diminuirFonte() {
    document.body.style.fontSize = "smaller";
}

// VALIDAÇÃO FORMULÁRIO
const form = document.getElementById("formContato");

if (form) {
    form.addEventListener("submit", function (e) {
        const nome = document.getElementById("nome")?.value;
        const email = document.getElementById("email")?.value;

        if (!nome || !email) {
            alert("Preencha nome e email!");
            e.preventDefault();
        }
    });
}