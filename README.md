# ONG Esperança

Projeto front-end desenvolvido durante o curso de Análise e Desenvolvimento de Sistemas (ADS), com o objetivo de aplicar conceitos de HTML, CSS e JavaScript na criação de uma aplicação para uma ONG fictícia.

## Funcionalidades

- Navegação dinâmica utilizando SPA (Single Page Application)
- Página de projetos da ONG
- Cadastro de voluntários
- Validação dos campos do formulário
- Máscaras para CPF, telefone e CEP
- Persistência dos dados no navegador com localStorage
- Layout responsivo para diferentes tamanhos de tela

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- IMask
- Git e GitHub
- GitHub Pages

## Como executar localmente

1. Clone este repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Utilize a extensão Live Server para iniciar um servidor local.
4. Abra o `index.html` pelo Live Server.
5. Navegue normalmente entre as páginas da aplicação.

O uso de um servidor local é necessário para o funcionamento adequado da navegação SPA e dos módulos JavaScript.

## Versionamento

O projeto utiliza uma estrutura baseada em GitFlow:

- `main`: versão estável e publicada.
- `develop`: integração das alterações em desenvolvimento.
- `feature/*`: desenvolvimento de novas funcionalidades.
- `hotfix/*`: correções urgentes da versão publicada.

As mensagens de commit seguem o padrão Conventional Commits, utilizando prefixos como `feat:` para funcionalidades e `fix:` para correções.

## Deploy

A versão estável do projeto é publicada através do GitHub Pages a partir da branch `main`.