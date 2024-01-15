window.onload = function (e) {

    var txtLargura = document.getElementById("txtLargura");
    var txtComp = document.getElementById("txtComp");
    var txtValorM = document.getElementById("txtValorM");

    var btn1 = document.getElementById("btn1");

    txtLargura.focus();
    

    btn1.onclick = function (e) {

        var largura = txtLargura.value;
        var comprimento = txtComp.value;
        var valorMetro = txtValorM.value;

        areaTerreno(largura, comprimento, valorMetro);

        txtLargura.focus();
        txtComp.value = "";
        txtLargura.value = "";
        txtValorM.value = "";

    }

    function areaTerreno(largura, comprimento, valorMetro) {


        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44366/api/aula8/terreno?largura=" + largura + "&comprimento=" + comprimento + "&valor=" + valorMetro);

        xhr.send();

    }
}