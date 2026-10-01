
export function ativarMascaras() {

    const campoCpf = document.querySelector("#cpf");
    const campoTelefone = document.querySelector("#telefone");
    const campoCep = document.querySelector("#cep");

    // Se os campos existirem na página, aplica as máscaras

    if (campoCpf) {
        IMask(campoCpf, {
            mask: "000.000.000-00"
        });
    }

    if (campoTelefone) {
        IMask(campoTelefone, {
            mask: "(00) 00000-0000"
        });
    }

    if (campoCep) {
        IMask(campoCep, {
            mask: "00000-000"
        });
    }
}