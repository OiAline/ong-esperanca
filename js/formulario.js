    import {
    salvarCadastro,
    carregarCadastro
} from "./storage.js";


    // =====================================================
    // VALIDAÇÃO DO FORMULÁRIO
    // =====================================================

    export function ativarValidacaoFormulario() {

        const formulario = document.querySelector(".form-cadastro");
        const toast = document.querySelector(".toast");

        // Se não estiver na página de cadastro, não faz nada
        if (!formulario) return;
        carregarCadastro(formulario);

        const campos = formulario.querySelectorAll(
            "input[required], select[required], textarea[required]"
        );


        // Validação enquanto o usuário preenche
        campos.forEach(campo => {

            campo.addEventListener("input", () => {

                campo.classList.remove(
                    "campo-erro",
                    "campo-sucesso"
                );

                // Não pinta campos que ainda estão vazios
                if (campo.value.trim() === "") {
                    return;
                }

                if (campo.checkValidity()) {
                    campo.classList.add("campo-sucesso");
                } else {
                    campo.classList.add("campo-erro");
                }

            });

        });


        // Validação ao enviar o formulário
        formulario.addEventListener("submit", evento => {

            evento.preventDefault();

            let formularioValido = true;

            campos.forEach(campo => {

                campo.classList.remove(
                    "campo-erro",
                    "campo-sucesso"
                );

                if (!campo.checkValidity()) {

                    campo.classList.add("campo-erro");
                    formularioValido = false;

                } else {

                    campo.classList.add("campo-sucesso");

                }

            });


            // Se houver algum erro, utiliza também
            // a mensagem nativa do navegador
            if (!formularioValido) {

                formulario.reportValidity();
                return;

            }
            //Salva os dados no localStorage
            salvarCadastro(formulario);


            // Exibe o toast criado anteriormente
            if (toast) {

                toast.classList.add("mostrar");

                setTimeout(() => {
                    toast.classList.remove("mostrar");
                }, 5000);

            }

        });

    }

