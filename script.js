document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider-slide");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
  
    let currentIndex = 0;
    let animating = false;
  
    function nextSlide() {
      if (!animating) {
        animating = true;
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
      }
    }
  
    function prevSlide() {
      if (!animating) {
        animating = true;
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
      }
    }
  
    function updateSlider() {
      const endValue = -currentIndex * 100;
      slider.style.transition = "none";
      slider.style.transform = "translateX(" + endValue + "%)";
      void slider.offsetWidth; // Force a reflow
      slider.style.transition = ""; // Re-enable transition for the next slide
      animating = false;
    }
  
    // Optionally, you can add automatic slide change every 2 seconds
    setInterval(() => {
      nextSlide();
    }, 3000);
  
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  
    // Handle the end of the slides to create an infinite effect
    slider.addEventListener("transitionend", function () {
      if (currentIndex === slides.length - 1) {
        // If the current slide is the last one, move to the first slide without transition
        slider.style.transition = "none";
        currentIndex = 0;
        updateSlider();
      }
    });
  });
  














  document.addEventListener("DOMContentLoaded", function () {
    // Get the button element
    const backToTopButton = document.getElementById("back-to-top-btn");
  
    // Add a click event listener to the button
    backToTopButton.addEventListener("click", function () {
      // Scroll to the top of the page with smooth behavior
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
    // Show or hide the button based on the user's scroll position
    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Show the button when the user has scrolled down
        backToTopButton.style.display = "block";
      } else {
        // Hide the button when the user is at the top
        backToTopButton.style.display = "none";
      }
    });
  });
  