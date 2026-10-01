// =====================================================
    // PROJETOS GERADOS DINAMICAMENTE
    // =====================================================

    export function renderizarProjetos() {
        const container = document.querySelector("#lista-projetos");

        // Se não estiver na página de projetos, não faz nada
        if (!container) return;

        const projetos = [
            {
                titulo: "Doe alimentos",
                descricao:
                    "Contribua com alimentos não perecíveis para ajudar famílias em situação de vulnerabilidade."
            },
            {
                titulo: "Seja um voluntário",
                descricao:
                    "Participe das nossas ações e faça a diferença na vida de outras pessoas."
            },
            {
                titulo: "Faça uma doação",
                descricao:
                    "Contribua com recursos financeiros para apoiar os projetos da ONG."
            }
        ];

        container.innerHTML = projetos
            .map(projeto => `
                <article class="card-projeto">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                </article>
            `)
            .join("");
    }


    