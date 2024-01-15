window.onload = function (e) {

    var txtPreco = document.getElementById("txtPreco");
    var txtQuant = document.getElementById("txtQuant");
    var txtValorEnt = document.getElementById("txtValorEnt");

    var btn1 = document.getElementById("btn1");

    txtPreco.focus();
    btn1.onclick = function (e) {

        var preco = txtPreco.value;
        var quant = txtQuant.value;
        var valorEnt = txtValorEnt.value;

        troco(preco, quant, valorEnt);

        txtPreco.focus();
        txtPreco.value = "";
        txtQuant.value = "";
        txtValorEnt.value = "";

    }

    function troco (preco, quant, valorEnt) {


        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44366/api/aula8/troco?precoProduto=" + preco + "&quantidade=" + quant + "&valorRecebido=" + valorEnt);

        xhr.send();
    }
}