export function salvarCadastro(formulario) {
    const dadosCadastro = {
        nome: formulario.querySelector("#nome").value,
        email: formulario.querySelector("#email").value,
        nascimento: formulario.querySelector("#nascimento").value,
        cpf: formulario.querySelector("#cpf").value,
        telefone: formulario.querySelector("#telefone").value,
        cep: formulario.querySelector("#cep").value,
        endereco: formulario.querySelector("#endereco").value,
        cidade: formulario.querySelector("#cidade").value,
        estado: formulario.querySelector("#estado").value
    };

    localStorage.setItem(
        "cadastroVoluntario",
        JSON.stringify(dadosCadastro)
    );
}


export function carregarCadastro(formulario) {
    const dadosSalvos = localStorage.getItem("cadastroVoluntario");

    if (!dadosSalvos) return;

    const dadosCadastro = JSON.parse(dadosSalvos);

    Object.entries(dadosCadastro).forEach(([campo, valor]) => {
        const input = formulario.querySelector(`#${campo}`);

        if (input) {
            input.value = valor;
        }
    });
}