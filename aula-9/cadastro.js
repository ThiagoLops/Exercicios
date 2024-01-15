window.onload = function (e) {

    var btnCadastrar = document.getElementById("btnCadastrar");

    var txtNome = document.getElementById("txtNome");

    var txtSobrenome = document.getElementById("txtSobrenome");

    var txtEmail = document.getElementById("txtEmail");

    var txtSenha = document.getElementById("txtSenha");

    var txtTelefone = document.getElementById("txtTelefone");

    var slcGenero = document.getElementById("slcGenero");

    txtNome.focus();

    btnCadastrar.onclick = function (e) {

        e.preventDefault();

        var nome = txtNome.value;
        var sobrenome = txtSobrenome.value;
        var email = txtEmail.value;
        var senha = txtSenha.value;
        var genero = slcGenero.value;
        var telefone = txtTelefone.value;

        if (nome == "") {
            exibirMensagemErro("Informe o nome.");
        }
        else if (sobrenome == "") {
            exibirMensagemErro("Informe o sobrenome.");
        }
        else if (email == "") {
            exibirMensagemErro("Informe o Email.");
        }
        else if (senha == "") {
            exibirMensagemErro("Informe a senha.")
        }
        else if (telefone == "") {
            exibirMensagemErro("Informe o telefone");
        }
        else {
            criarCadastro(nome, sobrenome, email, senha, telefone, genero);
        }
    }

    function exibirMensagemErro(mensagem) {

        spnErro = document.getElementById("spnErro");

        spnErro.innerHTML = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    }


    function criarCadastro(nome, sobrenome, email, senha, telefone, genero) {
        alert("Olá " + nome +" "+ sobrenome + " seus dados cadastrados com sucesso. ")
    }
}