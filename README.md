# Front-End-M3-AE2
1. Manejo del Entorno de Ejecución y Consola (1.5 puntos)
Configura y utiliza correctamente el entorno de ejecución de JavaScript en el
proyecto del hospital.

Se instaló Node Version Manager (NVM)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install 22
export NVM_DIR="$HOME/.var/app/com.vscodium.codium/config/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

Con Node Package Manager se instaló http-server
npm install -g http-server

Con esta linea se ejecuta
http-server -c-1

Lo anterior permitió habilitar el entorno de ejecución

1.1. Implementa el uso de console.log() en varias partes del proyecto para
depuración y mensajes informativos.
Se implementó en los archivos javascript desarrollo.js entorno.js stack.js utilidades.js
Las cuales se tomaron desde el repositorio de adalid, se extendieron sus funcionalidades y se integraron al presente proyecto

1.2. Utiliza import o require si es necesario para la estructura del programa
JavaScript.
No fue necesario en esta instancia


2. Manejo de Variables, Operadores y Prompt (2 puntos)
Solicita información al usuario mediante prompts (nombre, email, teléfono).
Se agregó en la vista de contacto, para el nombre email y telefono, con un boton de prompt y tb asociada al cambio del textbox correspondiente

2.1. Los datos deben mostrarse tanto en la consola como en una alert del navegador para darle retroalimentación al usuario.
Se agregó un label para estos efectos y tambien se despliega en la consola
Asociado el botón "Prompt Teléfono v2" -> Se agregó un alert solo para cumplir: alert("Error: ingresa solo números.");


2.2. Usa variables (let, const) para almacenar la información y explica el scope de
estas variables en el README.
Las variables declaradas con let y const tienen alcance de bloque de ejecución.
Ambas no pueden volver a ser redefinidas en el mismo bloque de ejecución.
Su diferencia está en la caracteristica de los valores que almacenaremos (constantes o que cambian de valor)
let lo ocuparé para almacenar variables cuyos valores cambian dentro de un bloque.
const lo ocuparé para almacenar variables con valores constantes dentro de un bloque.

Para registrar los valores de los registros ingresados en contacto, solo se emplearon declaraciones const, ya que en cada bloque de ejecución solo se asigna una vez el valor.

2.3. Utiliza operadores (==, ===, typeof) para validar los datos ingresados por el usuario. Por ejemplo, verifica que el campo de email contenga un "@".
Se agregó una validación "rasca" de tipo para el prompt del telefono (la de exp regular es suficiente para email y telefono). Con esto se le dio funconalidad al botón "Prompt Teléfono v2"

3. Ciclos e Iteraciones: Uso en la Interfaz (1.5 puntos)
Implementa un ciclo o iteración (for, while, forEach) que manipule el DOM de forma dinámica.

3.1. Ejemplo: muestra dinámicamente una lista de servicios médicos o doctores en la página de inicio o en la página de equipo médico, utilizando datos estáticos.
const especialidades = ["Cirugía Plástica", "Medicina General", "Urología", "Nutrición", "Cardiología", "Pediatría", "Neurología"];
Se muestra la lista de especialidades disponibles: homes.js y home.html se emplean para mostrar la lista

3.2. Utiliza condicionales dentro del ciclo para mostrar solo elementos específicos, como doctores con más de 5 años de experiencia o servicios médicos disponibles.
Se muestra la lista de profesionales con experiencia > 5 años: equipo.js y equipo.html se emplean para mostrar la lista

4. Manejo de Errores con try/catch y Debugging (2 puntos)
Añade una funcionalidad que use un bloque try/catch para manejar errores.
- Ejemplo: manejo de errores al ingresar un teléfono con un formato incorrecto o alintentar acceder a una variable que no existe.
- Utiliza el debugger para rastrear posibles errores dentro del código y explica su uso en el README.

En utilidades.js se agregó un error a proposito que fue comentado para probar el debugger en el contexto de ejemplo.
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