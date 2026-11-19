// ============================================
// 1. MENÚ: mostrar / ocultar
// ============================================
// document.getElementById busca un elemento por su id del HTML
const botonMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

// addEventListener "escucha" un evento; aquí, el clic
botonMenu.addEventListener("click", function () {
  // toggle: si la clase "oculto" está la quita, y si no está la pone
  menu.classList.toggle("oculto");

  // Cambiamos el texto del botón según el estado del menú
  if (menu.classList.contains("oculto")) {
    botonMenu.textContent = "☰ Mostrar menú";
  } else {
    botonMenu.textContent = "☰ Ocultar menú";
  }
});

// ============================================
// 2. CONTADOR DE "ME ENCANTAN"
// ============================================
const botonLike = document.getElementById("btn-like");
const contador = document.getElementById("contador");

let likes = 0; // variable que guarda cuántos likes hay

botonLike.addEventListener("click", function () {
  likes = likes + 1;               // sumamos 1
  contador.textContent = likes;    // mostramos el nuevo número
});

// ============================================
// 3. CONSEJOS PARA CUIDAR LAS FLORES
// ============================================
const botonConsejo = document.getElementById("btn-consejo");
const textoConsejo = document.getElementById("consejo");

// Un arreglo (lista) con varios consejos
const consejos = [
  "Sacúdelas suavemente con un plumero para quitar el polvo.",
  "Evita dejarlas al sol directo por mucho tiempo: los colores podrían opacarse.",
  "Si se aplastan, enderézalas con los dedos; el alambre vuelve a su forma.",
  "Guárdalas en un lugar seco, lejos de la humedad.",
  "Para limpiarlas, usa un secador de cabello en aire frío y a baja potencia."
];

let ultimoConsejo = -1; // para no repetir el mismo consejo dos veces seguidas

botonConsejo.addEventListener("click", function () {
  let posicion;

  // do...while repite hasta que salga un consejo distinto al anterior
  do {
    // Math.random() da un decimal entre 0 y 1; lo multiplicamos por el
    // tamaño de la lista y Math.floor lo redondea hacia abajo
    posicion = Math.floor(Math.random() * consejos.length);
  } while (posicion === ultimoConsejo);

  ultimoConsejo = posicion;
  textoConsejo.textContent = consejos[posicion];
});

// ============================================
// 4. FORMULARIO DE REGISTRO
// ============================================
const formulario = document.getElementById("form-registro");
const mensaje = document.getElementById("mensaje-registro");

formulario.addEventListener("submit", function (evento) {
  // Por defecto, un formulario recarga la página al enviarse.
  // preventDefault() evita eso.
  evento.preventDefault();

  // .value es lo que la persona escribió; trim() quita espacios sobrantes
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const clave = document.getElementById("clave").value.trim();

  // "" significa vacío. El || significa "o": si cualquiera de los
  // tres campos está vacío, mostramos el aviso y salimos con return.
  if (nombre === "" || correo === "" || clave === "") {
    mensaje.textContent = "Llena todos los requisitos";
    return; // return detiene la función: no se ejecuta lo que sigue
  }

  // Si llegamos aquí, los tres campos tienen algo escrito
  mensaje.textContent = "¡Gracias por registrarte, " + nombre + "! 🌸";

  // Vacía los campos del formulario
  formulario.reset();
});

// ============================================
// 5. CAMBIAR EL COLOR DE FONDO
// ============================================
// Este botón solo cambia el fondo de la página. Los demás colores
// (botones, tarjetas, títulos) no se tocan.
const botonTema = document.getElementById("btn-tema");

// "" significa el fondo normal (lavanda suave, sin clase extra)
const fondos = ["", "fondo-menta", "fondo-celeste", "fondo-crema"];
let fondoActual = 0;

botonTema.addEventListener("click", function () {
  // Quitamos las clases de fondo anteriores
  document.body.classList.remove("fondo-menta", "fondo-celeste", "fondo-crema");

  // Pasamos al siguiente; el % hace que al llegar al final vuelva al inicio
  fondoActual = (fondoActual + 1) % fondos.length;

  // Si el fondo no es "" le agregamos su clase al <body>
  if (fondos[fondoActual] !== "") {
    document.body.classList.add(fondos[fondoActual]);
  }
});