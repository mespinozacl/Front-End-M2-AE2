const especialidades = ["Cirugía Plástica", "Medicina General", "Urología", "Nutrición", "Cardiología", "Pediatría", "Neurología"];
const lespecialidades = document.getElementById("especialidades");
especialidades.forEach((especialidad) => {
  const item = document.createElement("li");
  item.textContent = especialidad;
  lespecialidades.appendChild(item);
});