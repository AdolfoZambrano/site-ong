# Site ONG

## Sobre o projeto

Este projeto consiste em um site desenvolvido para uma organização não governamental (ONG), com o objetivo de apresentar a organização, seus projetos e ações, além de disponibilizar um formulário de cadastro.

A aplicação foi desenvolvida como parte da EP IV, com foco na organização do código, controle de versão e melhoria da acessibilidade.

## Tecnologias utilizadas

- **HTML5** — estrutura das páginas e formulários.
- **CSS3** — estilização e organização visual da aplicação.
- **JavaScript** — interatividade, validações, máscaras e funcionalidades dos formulários.
- **Git** — controle de versão do projeto.
- **GitHub** — hospedagem do repositório e gerenciamento dos Pull Requests.

## Estrutura do projeto

```text
site-ong/
├── css/
│   └── style.css
├── img/
│   ├── acao-solidaria.jpg
│   └── acao-solidaria.png
├── js/
│   ├── formulario.js
│   ├── main.js
│   ├── mascaras.js
│   ├── paginas.js
│   └── storage.js
├── cadastro.html
├── index.html
├── projetos.html
└── README.md

## Instalação e execução local

Para executar o projeto localmente:

1. Tenha o **Git** instalado no computador.
2. Clone o repositório:

git clone https://github.com/AdolfoZambrano/site-ong.git

3. Entre na pasta do projeto:

cd site-ong

4. Abra o arquivo `index.html` em um navegador.

O projeto não utiliza dependências externas que necessitem de instalação via npm.

## Versionamento

O projeto utiliza **Git e GitHub** para controle de versão.

As alterações são organizadas em branches e integradas à branch `develop` por meio de Pull Requests. As mensagens de commit seguem o padrão **Conventional Commits**, utilizando tipos como `chore` e `fix`.

Para futuras releases, será utilizado o **Versionamento Semântico (MAJOR.MINOR.PATCH)**:

- **MAJOR** — alterações incompatíveis com versões anteriores.
- **MINOR** — novas funcionalidades compatíveis.
- **PATCH** — correções e ajustes.