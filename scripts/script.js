var textoImput = document.querySelector("#input-texto");
var outImput = document.querySelector("#output");

/* As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat" */

function criptografar() {
  var texto = textoImput.value;
  var resultadoCriptografado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  outImput.innerHTML =
    '<textarea readonly id="output-texto2" class="output-texto">' +
    resultadoCriptografado +
    "</textarea>" +
    '<button onclick="copiar()" class="botao_ação">Copiar</button>';
}

function descriptografar() {
  var texto = textoImput.value;
  var resultadoDescriptografado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  outImput.innerHTML =
    '<textarea readonly id="output-texto2" class="output-texto">' +
    resultadoDescriptografado +
    "</textarea>" +
    '<button onclick="copiar()" class="botao_ação">Copiar</button>';
}

function copiar() {
  navigator.clipboard.writeText(botaoCopiarTexto);
}

function copiar() {
  var textoCop = document.getElementById("output-texto2");
  textoCop.select();
  textoCop.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Texto Copiado");
}
