console.log("El script desarrollo.js se cargó correctamente.");

// Ejemplo de declaración de variables
function ejemploVariables() {
  var variableGlobal = "Esta es una variable global (var)";
  let variableDeBloque = "Esta es una variable de bloque (let)";
  const constante = "Esta es una constante";

  console.log(variableGlobal);
  console.log(variableDeBloque);
  console.log(constante);

  document.getElementById(
    "desarrollo-output"
  ).textContent = `${variableGlobal}\n${variableDeBloque}\n${constante}`;
}

// Ejemplo de operadores y validaciones
function ejemploOperadores() {
  const numero1 = 10;
  const numero2 = "10";

  // Operadores == y ===
  const resultado1 = numero1 == numero2 ? "Iguales (==)" : "Diferentes (==)";
  const resultado2 =
    numero1 === numero2 ? "Idénticos (===)" : "No idénticos (===)";

  // Operador typeof
  const tipoNumero1 = typeof numero1;
  const tipoNumero2 = typeof numero2;

  console.log(resultado1, resultado2);
  console.log(
    `Tipo de numero1: ${tipoNumero1}, Tipo de numero2: ${tipoNumero2}`
  );

  document.getElementById(
    "desarrollo-output"
  ).textContent = `Comparación ==: ${resultado1}\nComparación ===: ${resultado2}\nTipo de numero1: ${tipoNumero1}, Tipo de numero2: ${tipoNumero2}`;
}

// Ejemplo de condicionales y ciclos
function ejemploCondicionalesYCiclos() {
  const items = [1, 2, 3, 4, 5];
  let resultado = "";

  // Condicionales y ciclo for
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      resultado += `El número ${items[i]} es par.\n`;
    } else {
      resultado += `El número ${items[i]} es impar.\n`;
    }
  }

  console.log(resultado);
  document.getElementById("desarrollo-output").textContent = resultado;
}

// Ejemplo de manejo de errores con try/catch
function ejemploManejoErrores() {
  try {
    const num = prompt("Ingresa un número:");
    if (isNaN(num)) throw "No es un número";
    console.log(`Número ingresado: ${num}`);
    document.getElementById(
      "desarrollo-output"
    ).textContent = `Número ingresado: ${num}`;
  } catch (error) {
    debugger;
    console.error("Error:", error);
    document.getElementById(
      "desarrollo-output"
    ).textContent = `Error: ${error}`;
  }
}

// Asignar funciones a window para que estén disponibles globalmente
window.ejemploVariables = ejemploVariables;
window.ejemploOperadores = ejemploOperadores;
window.ejemploCondicionalesYCiclos = ejemploCondicionalesYCiclos;
window.ejemploManejoErrores = ejemploManejoErrores;
