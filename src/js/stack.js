console.log("El script stack.js se cargó correctamente.");
// Información sobre stacks JavaScript
const stacksInfo = {
  MEAN: "MEAN Stack: MongoDB, Express.js, Angular, Node.js",
  MERN: "MERN Stack: MongoDB, Express.js, React, Node.js",
};

// Función para mostrar información sobre los stacks
function mostrarInfoStack(stack) {
  if (stack in stacksInfo) {
    console.log(`Información del stack ${stack}:`);
    console.log(stacksInfo[stack]);
    document.getElementById("stack-output").textContent = stacksInfo[stack];
  } else {
    console.log("Stack no reconocido.");
    document.getElementById("stack-output").textContent =
      "Stack no reconocido.";
  }
}

// Ejemplos de aplicaciones frontend y backend
function ejemploFrontend() {
  console.log(
    "Ejemplo de aplicación frontend usando React para MERN o Angular para MEAN"
  );
  document.getElementById("stack-output").textContent =
    "Frontend: Construir una interfaz con React (MERN) o Angular (MEAN)";
}

function ejemploBackend() {
  console.log(
    "Ejemplo de aplicación backend usando Node.js y Express.js para gestionar API"
  );
  document.getElementById("stack-output").textContent =
    "Backend: Configurar una API REST con Node.js y Express.js";
}

// Asignar funciones a window para que estén disponibles globalmente
window.mostrarInfoStack = mostrarInfoStack;
window.ejemploFrontend = ejemploFrontend;
window.ejemploBackend = ejemploBackend;
