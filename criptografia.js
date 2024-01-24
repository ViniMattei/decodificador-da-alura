function codeficar() {
  var textoOriginal = document.getElementById("inputBox").value;
  var textoCriptografado = criptografarPalavra(textoOriginal);
  document.getElementById("resultBox").value = textoCriptografado;
}

function descodificar() {
  var textoCriptografado = document.getElementById("inputBox").value;
  var textoDescriptografado = descriptografarPalavra(textoCriptografado);
  document.getElementById("resultBox").value = textoDescriptografado;
}

function criptografarPalavra(palavra) {
  return palavra
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
}

function descriptografarPalavra(palavraCriptografada) {
  return palavraCriptografada
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
}

function copiar() {
  var resultado = document.getElementById("resultBox");
  resultado.select();
  document.execCommand("copy");
}