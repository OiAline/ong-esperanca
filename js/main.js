import {
    ativarMascaras
} from "./mascaras.js";

import {
    ativarValidacaoFormulario
} from "./formulario.js";

import {
    renderizarProjetos
} from "./projetos.js";

import {
    ativarSPA
} from "./spa.js";


// =====================================================
// INICIALIZAÇÃO DA APLICAÇÃO
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // INICIALIZAÇÃO DO CONTEÚDO
    // =====================================================

    function inicializarConteudo() {

        // Renderiza os cards da página de projetos
        renderizarProjetos();

        // Ativa as máscaras de CPF, telefone e CEP
        ativarMascaras();

        // Ativa a validação e recuperação do formulário
        ativarValidacaoFormulario();
    }


    // Inicializa os recursos da página aberta inicialmente
    inicializarConteudo();


    // Ativa a navegação SPA
    // A função inicializarConteudo é passada para que
    // os recursos sejam reativados após cada troca de página
    ativarSPA(inicializarConteudo);

});