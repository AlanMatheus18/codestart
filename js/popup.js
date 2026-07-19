const botoes = document.querySelectorAll("#btn-header");

botoes.forEach(botao => {

    botao.addEventListener("click", ()=>{

        document.querySelector("#contato").scrollIntoView({

            behavior:"smooth"

        });

    });

});