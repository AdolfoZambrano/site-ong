function salvarCadastro(dados) {
    localStorage.setItem(
        "cadastro",
        JSON.stringify(dados)
    );
}

function carregarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastro");

    if (!dadosSalvos) {
        return null;
    }

    try {
        return JSON.parse(dadosSalvos);
    } catch (erro) {
        console.error("Não foi possível recuperar o cadastro:", erro);
        return null;
    }
}

window.salvarCadastro = salvarCadastro;
window.carregarCadastro = carregarCadastro;
