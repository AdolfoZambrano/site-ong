function verificarCampos(form) {
    const campos = form.querySelectorAll("input");

    campos.forEach((campo) => {
        campo.classList.remove("campo-erro");

        if (!campo.checkValidity()) {
            campo.classList.add("campo-erro");
        }
    });
}

window.verificarCampos = verificarCampos;

function configurarFormulario(site) {
    site.addEventListener("input", (event) => {
        if (!event.target.matches("input")) {
            return;
        }

        const form = event.target.closest("form");

        if (!form) {
            return;
        }

        verificarCampos(form);

        const botao = form.querySelector("button[type='submit']");

        botao.disabled = !form.checkValidity();
    });
}

window.configurarFormulario = configurarFormulario;

function configurarEnvioFormulario(site) {
    site.addEventListener("submit", (event) => {
        if (!event.target.matches("form")) {
            return;
        }

        event.preventDefault();

        const form = event.target;
        const toast = form.parentElement.querySelector(".toast");

        verificarCampos(form);

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const dadosCadastro = Object.fromEntries(
            new FormData(form)
        );

        salvarCadastro(dadosCadastro);

        toast.style.display = "block";

        setTimeout(() => {
            toast.style.display = "none";
        }, 3000);
    });
}

window.configurarEnvioFormulario = configurarEnvioFormulario;
