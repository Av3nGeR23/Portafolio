function encriptarTexto(texto) {
  let textoEncriptado = texto.toLowerCase();
  textoEncriptado = textoEncriptado.replace(/e/g, "enter");
  textoEncriptado = textoEncriptado.replace(/i/g, "imes");
  textoEncriptado = textoEncriptado.replace(/a/g, "ai");
  textoEncriptado = textoEncriptado.replace(/o/g, "ober");
  textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
  return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
  let texto = textoEncriptado;
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  return texto;
}
function mostrarEncriptado() {
  const texto = document.getElementById("texto").value;
  const textoEncriptado = encriptarTexto(texto);
  document.getElementById("resultado").value = textoEncriptado;
}

function mostrarDesencriptado() {
  const textoEncriptado = document.getElementById("texto").value;
  const texto = desencriptarTexto(textoEncriptado);
  document.getElementById("resultado").value = texto;
}
function copiarTexto() {
  var resultado = document.getElementById("resultado");
  resultado.select();
  document.execCommand("copy");
 
}
