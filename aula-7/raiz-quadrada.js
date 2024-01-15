window.onload = function (e) {
    //programação

    var btn1 = document.getElementById("btn1");

    var numbertxt = document.getElementById("txtNumber");
    numbertxt.focus();

    btn1.onclick = function (e) {

    

        var numeroTxt = numbertxt.value;

        var numero = parseInt(numeroTxt);

        var calculo = raizQuadrada(numero);

        alert(calculo);

        numbertxt.focus();
        numbertxt.value = "";
        

    };

    function raizQuadrada (numero) {

        var raiz = numero * numero;

        return raiz;
    };

    
}
