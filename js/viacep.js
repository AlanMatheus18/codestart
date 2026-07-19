const cep = document.querySelector("#cep");

cep.addEventListener("input", ()=>{

    let valor = cep.value.replace(/\D/g,"");

    if(valor.length > 8){

        valor = valor.substring(0,8);

    }

    valor = valor.replace(/^(\d{5})(\d)/,"$1-$2");

    cep.value = valor;

});

cep.addEventListener("blur", buscarCEP);

async function buscarCEP(){

    const numero = cep.value.replace(/\D/g,"");

    if(numero.length != 8){

        return;

    }

    try{

        const resposta = await fetch(`https://viacep.com.br/ws/${numero}/json/`);

        const dados = await resposta.json();

        if(dados.erro){

            alert("CEP não encontrado");

            return;

        }

        document.querySelector("#rua").value = dados.logradouro;
        document.querySelector("#bairro").value = dados.bairro;
        document.querySelector("#cidade").value = dados.localidade;
        document.querySelector("#estado").value = dados.uf;

    }

    catch{

        alert("Erro ao buscar CEP");

    }

}