console.assert("Legolas" > "Gimli");
console.clear();
console.dir(window);
console.dirxml(document.body);

const marvel = ['Spider Man', 'Iron Man', 'Capitan America', 'Lobezno'];
console.group('Superheroes de Marvel');
marvel.forEach(superhero=> console.log(superhero));
console.groupEnd();

function mostrarRecordatorio() {
  const dia = document.getElementById("dia").value;
  const mensaje = document.getElementById("mensaje").value;
  const resultado = document.getElementById("resultado");

  let actividad = "";

  switch(dia) {
    case "Lunes":
      actividad = "Debes atender un cliente específico.";
      break;
    case "Martes":
      actividad = "Visitar una agencia fuera de la ciudad.";
      break;
    case "Miércoles":
      actividad = "Llevar a tu hija al ballet.";
      break;
    case "Jueves":
      actividad = "Priorizar entregas de desarrollo.";
      break;
    case "Viernes":
      actividad = "Atender problemas de manera remota.";
      break;
    case "Sábado":
      actividad = "Hacer lo que tu esposa quiera 😅.";
      break;
    case "Domingo":
      actividad = "Día libre, descansa.";
      break;
    default:
      actividad = "Por favor selecciona un día válido.";
  }

  resultado.innerHTML = `<p>${actividad}</p><p>${mensaje}</p>`;
}
