var numerosDigitados = [];
var numeroMenor;
var numeroMaior;
var somaTodos = 0;
var mediaNumeros = 0;


function botao_add() {

    var numDigitado = document.getElementById("txt1").value;
    var numConvertido = parseInt(numDigitado);


    numerosDigitados.push(numConvertido);

    document.getElementById("txt1").value = "";
    document.getElementById("txt1").focus();

    alert("Número adicionado com sucesso.");


}

function botao_resul() {


    for (var i = 0; i < numerosDigitados.length; i++) {


        if (numeroMenor == undefined || numerosDigitados[i] < numeroMenor) {

            numeroMenor = numerosDigitados[i];

        }

        if (numeroMaior == undefined || numerosDigitados[i] > numeroMaior) {

            numeroMaior = numerosDigitados[i];

        }

        somaTodos += numerosDigitados[i];

    }

    mediaNumeros = somaTodos / numerosDigitados.length;

    var mensagem = "O maior número digitado foi: " + numeroMaior + "\rO menor número digitado foi: " + numeroMenor + "\r A soma de todos os números é: " + somaTodos + "\r A média é: " + mediaNumeros.toFixed(2);

    alert(mensagem);

    numerosDigitados = []; 

}
