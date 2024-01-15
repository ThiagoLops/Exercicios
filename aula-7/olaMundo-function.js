window.onload = function (e) {
    //Dispera quando a pagina é carregada;
    //programação

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {
        //Dispara quando o usúario clica no botão

        var mensagem = "Olá mundo";

        exibirMensagem(mensagem);
    };

    function exibirMensagem (mensagem) {

        alert(mensagem);
    };
}