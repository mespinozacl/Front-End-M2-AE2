

// Ejemplo básico de uso de console.log para mensajes informativos
console.log("El script entorno.js se cargó correctamente.");
console.log("Configuración del entorno de ejecución iniciada...");

// Setting de variables
const entorno = "Navegador";
const version = "ES6";

// Función para mostrar información sobre el entorno de ejecución
function mostrarEntorno() {
  console.log(`Entorno de ejecución: ${entorno}`);
  console.log(`Versión de JavaScript: ${version}`);
  document.getElementById(
    "entorno-output"
  ).textContent = `Entorno de ejecución: ${entorno}\nVersión de JavaScript: ${version}`;
}

// Simulación del Event Loop en JavaScript
function simulacionEventLoop() {
  console.log("Inicio de simulación del Event Loop...");

  // Simular tarea en el stack de ejecución
  console.log("Ejecutando tarea en el stack principal...");

  // Tarea en la cola de mensajes (macrotarea) con setTimeout
  setTimeout(() => {
    console.log("Macrotarea ejecutada después de 0 ms");
    document.getElementById("entorno-output").textContent +=
      "\nMacrotarea ejecutada después de 0 ms";
  }, 0);

  // Tarea en la cola de microtareas con Promise
  Promise.resolve().then(() => {
    console.log(
      "Microtarea ejecutada inmediatamente después del stack principal"
    );
    document.getElementById("entorno-output").textContent +=
      "\nMicrotarea ejecutada inmediatamente después del stack principal";
  });

  console.log("Fin del stack principal");
}

// Asignar funciones a window para que estén disponibles globalmente
window.mostrarEntorno = mostrarEntorno;
window.simulacionEventLoop = simulacionEventLoop;
