const textArea = document.querySelector("#input__texto");
const mensagem = document.querySelector(".mensagem");
const noMessage = document.querySelector(".sem__mensagem");
mostrarImagem();

function mostrarImagem() {
  if (mensagem.value === "") {
    mensagem.style.display = "block";
    noMessage.style.display = "block";
    mensagem.style.backgroundImage = "url('../assets/busca.png')";
  } else {
    noMessage.style.display = "none";
    mensagem.style.display = "block";
    mensagem.style.backgroundImage = "none";
  }
}

textArea.addEventListener("input", mostrarImagem);

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
  mostrarImagem();
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
  mostrarImagem();
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];

  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringDesencriptada;
}

if (mensagem.value !== "") {
  mensagem.style.display = "block";
  mensagem.style.backgroundImage = "url('../assets/busca.png')";
}

function btnCopiar() {
  textArea.value = mensagem.value;
}
