// utilidades.js
console.log("El script utilidades.js se cargó correctamente.");
// Validación de correo electrónico básico
function validarEmail(email) {
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const esValido = regexEmail.test(email);
  console.log(`Email ${email} es válido: ${esValido}`);
  document.getElementById(
    "utilidades-output"
  ).textContent = `Email ${email} es válido: ${esValido}`;
}

// Validación de número de teléfono
function validarTelefono(telefono) {
  const regexTelefono = /^\d{10}$/; // Se asume un número de 10 dígitos
  const esValido = regexTelefono.test(telefono);
  console.log(`Teléfono ${telefono} es válido: ${esValido}`);
  document.getElementById(
    "utilidades-output"
  ).textContent = `Teléfono ${telefono} es válido: ${esValido}`;
  return esValido;
}

// Validación de número de teléfono básica
function validarTelefono2(telefono2) {
  if(parseInt(telefono2)*0==0)
  {
    console.log(`Teléfono es numero`);
    return true;
  }
  else
  {
    console.log(`Teléfono No es un número`);
    alert("Error: Ingresa solo números.");
    return false;
  }
}

// Almacenar teléfono
function almacenarTelefono(telefono) {
  try {
    if(validarTelefono(telefono)) {
      const telefono_almacenado = telefono;
      console.log(`Teléfono validado y almacenado: ${telefono_almacenado}`);
      document.getElementById(
        "utilidades-output"
      ).textContent = `Número ingresado: ${telefono_almacenado}`;
    }
    else{
    //esto da error, se agregó a propósito (la variable no ha sido definida en este contexto)
    //  console.log(`Teléfono validado y almacenado: ${telefono_almacenado}`);
    //  document.getElementById(
    //    "utilidades-output"
    //  ).textContent = `Número ingresado: ${telefono}`;
    }
  } catch (error) {
    //debugger;
    console.error("Error:", error);
    document.getElementById(
      "utilidades-output"
    ).textContent = `Error: ${error}`;
  }
}

// Capitalizar la primera letra de cada palabra en una cadena de texto
function capitalizarTexto(texto) {
  const textoCapitalizado = texto.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );
  console.log(`Texto original: ${texto}`);
  console.log(`Texto capitalizado: ${textoCapitalizado}`);
  document.getElementById(
    "utilidades-output"
  ).textContent = `Texto capitalizado: ${textoCapitalizado}`;
}

// Calcular la suma de un arreglo de números
function sumarArreglo(numeros) {
  const suma = numeros.reduce((total, num) => total + num, 0);
  console.log(`Arreglo: [${numeros}]`);
  console.log(`Suma del arreglo: ${suma}`);
  document.getElementById(
    "utilidades-output"
  ).textContent = `Suma del arreglo: ${suma}`;
}

// Asignar funciones a window para que estén disponibles globalmente
window.validarEmail = validarEmail;
window.validarTelefono = validarTelefono;
window.validarTelefono2 = validarTelefono2;
window.almacenarTelefono = almacenarTelefono;
window.capitalizarTexto = capitalizarTexto;
window.sumarArreglo = sumarArreglo;