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
