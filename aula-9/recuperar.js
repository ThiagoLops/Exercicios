window.onload = function (e) {

    var btnEnviar = document.getElementById("btnEnviar");

    var txtEmail = document.getElementById("cxEmail");

    txtEmail.focus();

    btnEnviar.onclick = function (e){

        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {

            exibirMensagemErro("Favor informar o email.");

        } else {
            enviarAcesso(email);
        }

    }

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");

        spnErro.innerHTML = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);

    }

    function enviarAcesso(email) {

        alert("Foi enviando um link para " + email + ".")
    }
}