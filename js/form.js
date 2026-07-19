const form = document.querySelector("#formulario");

form.addEventListener("submit", enviarFormulario);

async function enviarFormulario(e){

    e.preventDefault();

    const btn = document.querySelector(".btn-form");

    btn.disabled = true;
    btn.innerText = "Enviando...";

    const dados = {

        nome: document.querySelector("#nome").value,
        email: document.querySelector("#email").value,
        cep: document.querySelector("#cep").value,
        rua: document.querySelector("#rua").value,
        bairro: document.querySelector("#bairro").value,
        cidade: document.querySelector("#cidade").value,
        estado: document.querySelector("#estado").value,
        mensagem: document.querySelector("#mensagem").value

    };

    try{

        await emailjs.send(
            "service_0on5joc",
            "template_fer2pd5",
            dados
        );

        alert("Inscrição enviada com sucesso!");

        form.reset();

    }catch(error){

        console.error(error);

        alert("Erro ao enviar.");

    }

    btn.disabled = false;
    btn.innerText = "Enviar inscrição";

}