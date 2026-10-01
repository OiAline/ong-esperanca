// =====================================================
// SPA - NAVEGAÇÃO E CARREGAMENTO DAS PÁGINAS
// =====================================================

export function ativarSPA(inicializarConteudo) {

    const links = document.querySelectorAll("[data-page]");
    const conteudoPrincipal =
        document.querySelector("#conteudo-principal");


    async function carregarPagina(pagina) {

        try {

            const resposta = await fetch(pagina);

            if (!resposta.ok) {
                throw new Error(
                    "Não foi possível carregar a página."
                );
            }

            const html = await resposta.text();

            const parser = new DOMParser();

            const documento =
                parser.parseFromString(html, "text/html");

            const novoConteudo =
                documento.querySelector("main");

            if (!novoConteudo) {
                throw new Error(
                    "Conteúdo principal não encontrado."
                );
            }

            conteudoPrincipal.innerHTML =
                novoConteudo.innerHTML;

            // Reativa os recursos do novo conteúdo
            inicializarConteudo();

        } catch (erro) {

            conteudoPrincipal.innerHTML =
                "<p>Não foi possível carregar o conteúdo.</p>";

            console.error(
                "Erro ao carregar página:",
                erro
            );
        }
    }


    // Intercepta os links da navegação
    links.forEach(link => {

        link.addEventListener("click", evento => {

            evento.preventDefault();

            const pagina = link.dataset.page;

            carregarPagina(pagina);

            history.pushState(
                { pagina },
                "",
                pagina
            );
        });
    });


    // Botões voltar e avançar do navegador
    window.addEventListener("popstate", () => {

        const pagina =
            window.location.pathname.split("/").pop()
            || "index.html";

        carregarPagina(pagina);
    });
}