const textArea = document.querySelector(".insercao_texto");
const mensagem = document.querySelectorAll(".mensagem");

function criptografar() {
  const textoEncriptografado = criptografar(textArea.value);
  mensagem.value = textoEncriptografado;
  textArea.value = "";
}

function criptografar(stringEncriptografada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptografada = stringEncriptografada.toLowerCase();

  for (let i = 0; i < matrizCodigo; i++) {
    if (stringEncriptografada.includes(matrizCodigo[i][0])) {
      stringEncriptografada = stringEncriptografada.replaceAll(
        matrizCodigo[1][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringEncriptografada;
}

function descriptografar() {
  const textoDesencriptado = descriptografar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
}

function descriptografar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }

  return stringDesencriptada;
}

function copiar() {
  navigator.clipboard.writeText(botaoCopiarTexto);
}

function copiar() {
  var textoCop = document.getElementById("#input-texto");
  textoCop.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Texto Copiado");
}
