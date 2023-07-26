function toggleSliderActive(link) {
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

  const sliderId = link.getAttribute("href"); // Obtenemos el valor del atributo href
  const targetSlider = document.querySelector(sliderId); // Obtenemos el div del contenido a mostrar
  targetSlider.classList.remove("hidden");
}
