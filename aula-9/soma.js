window.onload = function (e) {

    var txtValor0 = document.getElementById("txt0");
    var txtValor1 = document.getElementById("txt1");

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var valor0 = txtValor0.value;
        var valor1 = txtValor1.value;

        somar(valor0, valor1);

    }

    function somar(valor0, valor1) {
        var data = "";

        // WARNING: For GET requests, body is set to null by browsers.

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44366/api/aula8/somar?valor1=" + valor0 + "&valor2=" + valor1);

        xhr.send(data);
    }
}