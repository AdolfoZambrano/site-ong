const paginas = {
    inicio: `
        <section>
            <h2>Sobre a ONG</h2>
            <p>Esta ONG desenvolve ações solidárias para apoiar pessoas e comunidades.</p>

            <img 
                src="/img/acao-solidaria.webp" 
                alt="Voluntários entregando alimentos durante uma ação solidária" 
                width="450"
            >
        </section>

        <section>
            <h2>Contato</h2>

            <address>
                <p>E-mail: meucontato@gmail.com</p>
                <p>Telefone: (41) 00000-0000</p>
            </address>
        </section>
    `,

    projetos: `
        <section id="projetos">
            <h2>Projetos em andamento</h2>
            <p>Conheça algumas das ações solidárias desenvolvidas pela ONG.</p>

            <div class="projetos-grid">
                <article>
                    <h3>Campanha de Arrecadação de Alimentos</h3>
                    <span class="badge">Em andamento</span>
                    <p>
                        Projeto voltado para arrecadar alimentos e ajudar
                        famílias em situação de vulnerabilidade.
                    </p>
                </article>

                <article>
                    <h3>Campanha do Agasalho</h3>
                    <span class="badge">Em andamento</span>
                    <p>
                        Projeto de arrecadação de roupas e agasalhos para
                        apoiar pessoas durante os períodos de frio.
                    </p>
                </article>
            </div>
        </section>

        <section id="contribuir">
            <h2>Como contribuir</h2>
            <p>
                As pessoas interessadas podem apoiar as campanhas por meio
                da doação de alimentos, roupas e outros itens necessários
                para as ações da ONG.
            </p>
        </section>

        <section id="voluntariado">
            <h2>Voluntariado</h2>
            <p>
                Quem deseja participar como voluntário pode colaborar na
                organização das campanhas, separação de doações e apoio
                durante as ações da ONG.
            </p>
        </section>
    `,

    cadastro: `
        <section>
            <h2>Faça seu cadastro</h2>
            <p>Preencha os dados abaixo para colaborar com a ONG.</p>

            <div class="alerta">
                Preencha todos os campos obrigatórios antes de enviar o cadastro.
            </div>

            <form>
                <div class="form-grid">
                    <fieldset>
                        <legend>Dados pessoais</legend>

                        <label for="nome">Nome completo:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                        >

                        <label for="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        >

                        <label for="nascimento">Data de nascimento:</label>
                        <input
                            type="date"
                            id="nascimento"
                            name="nascimento"
                            required
                        >

                        <label for="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="000.000.000-00"
                            maxlength="14"
                            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                            title="Digite o CPF no formato 000.000.000-00"
                            required
                        >

                        <label for="telefone">Telefone:</label>
                        <input
                            type="text"
                            id="telefone"
                            name="telefone"
                            placeholder="(00) 00000-0000"
                            maxlength="15"
                            pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                            title="Digite o telefone no formato (00) 00000-0000"
                            required
                        >
                    </fieldset>

                    <fieldset>
                        <legend>Endereço</legend>

                        <label for="cep">CEP:</label>
                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            placeholder="00000-000"
                            maxlength="9"
                            pattern="[0-9]{5}-[0-9]{3}"
                            title="Digite o CEP no formato 00000-000"
                            required
                        >

                        <label for="endereco">Endereço:</label>
                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            required
                        >

                        <label for="cidade">Cidade:</label>
                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            required
                        >

                        <label for="estado">Estado:</label>
                        <input
                            type="text"
                            id="estado"
                            name="estado"
                            maxlength="2"
                            placeholder="PR"
                            required
                        >
                    </fieldset>
                </div>

                <button type="submit">Enviar</button>
            </form>

            <div class="toast">
                ✓ Cadastro enviado com sucesso!
            </div>
        </section>
    `
};
window.paginas = paginas;
