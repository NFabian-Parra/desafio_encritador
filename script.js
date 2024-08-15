// Función para validar el texto
function validarTexto(texto) {
  const regex = /^[a-z\s]+$/; // Solo permite letras minúsculas y espacios
  return regex.test(texto);
}

// Función para encriptar el texto
function encriptarTexto(texto) {
  return texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
  return texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
}

// Función para manejar el clic en el botón de encriptar
document.getElementById("btn_encriptar").addEventListener("click", function() {
  const texto = document.querySelector(".form__imput").value;
  
  if (validarTexto(texto)) {
      const textoEncriptado = encriptarTexto(texto);
      mostrarResultado(textoEncriptado);
  } else {
      alert("Por favor ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
  }
});

// Función para manejar el clic en el botón de desencriptar
document.getElementById("btn_decencriptar").addEventListener("click", function() {
  const texto = document.querySelector(".form__imput").value;
  
  if (validarTexto(texto)) {
      const textoDesencriptado = desencriptarTexto(texto);
      mostrarResultado(textoDesencriptado);
  } else {
      alert("Por favor ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
  }
});

// Función para mostrar el resultado y actualizar la UI
function mostrarResultado(texto) {
  document.querySelector(".output__msj").innerHTML = `<p>${texto}</p>`;
  document.querySelector(".output__msj").style.textAlign = "start";
  document.querySelector(".output__msj").style.flexGrow = "0";
  document.querySelector(".btn_container_copiar").style.display = "flex";
  document.querySelector(".output__info").style.display = "none";
}

// Función para copiar el texto al portapapeles
document.querySelector(".btn__copiar").addEventListener("click", function() {
  const resultado = document.querySelector(".output__msj").innerText;
  navigator.clipboard.writeText(resultado).then(() => {
      const mensajeCopiar = document.querySelector(".msj__copiar");
      mensajeCopiar.style.display = "inline"; // Mostrar el mensaje
      mensajeCopiar.classList.add("mostrar");

      setTimeout(() => {
          mensajeCopiar.classList.remove("mostrar");
          mensajeCopiar.style.display = "none"; // Ocultar el mensaje
      }, 2000); // El mensaje desaparece después de 2 segundos
  });
});