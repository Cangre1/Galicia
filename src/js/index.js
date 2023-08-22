//FUNCIÓN HERO DESKTOP//
// Obtener todos los elementos con la clase "card-img"
let cardImgs = document.querySelectorAll(".card-img");

// Función para mostrar elementos
function showElements(event) {
  let textElement = event.currentTarget.querySelector(".text-card");
  let arrowElement = event.currentTarget.querySelector(".arrow-card");
  textElement.classList.remove("hidden");
  arrowElement.classList.remove("hidden");
  textElement.classList.add("transition");
  textElement.classList.add("duration-300");
  textElement.classList.add("ease-in-out");
}

// Función para ocultar elementos
function hideElements(event) {
  let textElement = event.currentTarget.querySelector(".text-card");
  let arrowElement = event.currentTarget.querySelector(".arrow-card");
  textElement.classList.add("hidden");
  arrowElement.classList.add("hidden");
}

// Agregar eventos a todos los elementos con la clase "card-img"
cardImgs.forEach((cardImg) => {
  // Evento mouseover: Mostrar elementos al pasar el cursor
  cardImg.addEventListener("mouseover", showElements);
  // Evento mouseout: Ocultar elementos al quitar el cursor
  cardImg.addEventListener("mouseout", hideElements);

  // Evento click: Alternar elementos al hacer clic
  cardImg.addEventListener("click", (event) => {
    event.preventDefault(); // Evitar la acción predeterminada del clic (por ejemplo, seguir un enlace)
    let textElement = event.currentTarget.querySelector(".text-card");
    let arrowElement = event.currentTarget.querySelector(".arrow-card");

    if (textElement.classList.contains("hidden")) {
      textElement.classList.remove("hidden");
      arrowElement.classList.remove("hidden");
    } else {
      textElement.classList.add("hidden");
      arrowElement.classList.add("hidden");
    }
  });
});

//FUNCIÓN DE SECCIONES DE INFORMACION//
function toggleSliderActive(link, event) {
  event.preventDefault(); // Detener el comportamiento predeterminado del enlace

  const sliderContainers = document.querySelectorAll("#contenido-slider > div");
  const sliderLinks = document.querySelectorAll(".slider-active");

  sliderContainers.forEach((container) => {
    container.classList.add("hidden");
  });

  sliderLinks.forEach((sliderLink) => {
    sliderLink.classList.add("slider-noactive");
    sliderLink.classList.remove("slider-active");
  });

  link.classList.remove("slider-noactive");
  link.classList.add("slider-active");

  const sliderId = link.getAttribute("data-slider-target"); // Obtenemos el valor del atributo data-slider-target
  const targetSlider = document.querySelector(sliderId); // Obtenemos el div del contenido a mostrar
  targetSlider.classList.remove("hidden");
}
