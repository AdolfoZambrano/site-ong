function aplicarMascaras() {
    const cpf = site.querySelector("#cpf");
    const telefone = site.querySelector("#telefone");
    const cep = site.querySelector("#cep");

    if (cpf) {
        IMask(cpf, {
            mask: "000.000.000-00"
        });
    }

    if (telefone) {
        IMask(telefone, {
            mask: "(00) 00000-0000"
        });
    }

    if (cep) {
        IMask(cep, {
            mask: "00000-000"
        });
    }
}
window.aplicarMascaras = aplicarMascaras;
