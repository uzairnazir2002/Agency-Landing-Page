
 const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });



  const slider = document.querySelector(".slider");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  const slides = document.querySelectorAll(".review-box");
  const totalSlides = slides.length;

  function updateSlider() {
    const slideWidth = slides[0].offsetWidth + 30; // width + margin
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 4) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  // Make responsive on resize
  window.addEventListener("resize", updateSlider);

