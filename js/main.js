const site = document.querySelector("#site");
console.log("MAIN.JS ESTÁ FUNCIONANDO");


function renderizarPagina() {

    const rota = location.hash.replace("#", "") || "inicio";

    site.innerHTML = window.paginas[rota] || window.paginas.inicio;

    if (rota === "cadastro") {
        restaurarCadastro();
        aplicarMascaras();
    }
}


function restaurarCadastro() {
    const dados = carregarCadastro();

    if (!dados) {
        return;
    }

    Object.entries(dados).forEach(([nome, valor]) => {
        const campo = site.querySelector(`[name="${nome}"]`);

        if (campo) {
            campo.value = valor;
        }
    });
}


renderizarPagina();

configurarFormulario(site);
configurarEnvioFormulario(site);

window.addEventListener("hashchange", renderizarPagina);

const btnContraste = document.getElementById("btn-contraste");

if (btnContraste) {
    btnContraste.addEventListener("click", () => {
        const altoContraste = document.body.classList.toggle("alto-contraste");

        btnContraste.setAttribute("aria-pressed", altoContraste);
    });
}
