const doctores = [
    { nombre: "Dr. Juan Carnicer O.", especialidad: "Cirugía Plástica", experiencia: 8},
    { nombre: "Dra. Elba Lazo", especialidad: "Medicina General", experiencia: 6},
    { nombre: "Dr. Aquiles Castro", especialidad: "Urología", experiencia: 5},
    { nombre: "Dra. Clara Melo", especialidad: "Nutrición", experiencia: 9},
    { nombre: "Dr. Pérez", especialidad: "Cirugía Plástica", experiencia: 3 },
    { nombre: "Dr. López", especialidad: "Nutrición", experiencia: 3 },
  ];
  const ldoctores = document.getElementById("doctores");
  doctores.forEach((doctor) => {
    if (doctor.experiencia > 5) {
      console.log(`${doctor.nombre} tiene suficiente experiencia.`);
      const item = document.createElement("li");
      item.textContent = doctor.nombre + " - " + doctor.especialidad + " - " + doctor.experiencia + " años de experiencia";
      ldoctores.appendChild(item);
    }
  });