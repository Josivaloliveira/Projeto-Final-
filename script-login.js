let btnAdd = document.querySelector('#addBotao');

// Criar um evento de click para o botão, que irá executar a function anonima

btnAdd.addEventListener("click", function(){
    let inputValor = document.querySelector('#meuInput').value;
    if (inputValor === ""){
        
        alert("VOCÊ NÃO PREENCHEU OS CAMPOS!")
    }else{
        // alert("LOGIN REALIZADO COM SUCESSO!")
        document.querySelector("#mensagem-ok").insertAdjacentHTML(

            "afterend",
            `<div class="card-teste">
            <span>LOGIN EFETUADO COM SECESSO!</span>
            </div>
            `
        );

        let mensagem = document.querySelector('.card-teste');
        setTimeout(() => {
            mensagem.style.display = "none";
        }, 3000)
    }
        
    document.querySelector('#meuInput').value = "";

});
