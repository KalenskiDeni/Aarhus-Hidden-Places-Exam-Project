/* Image slider function */
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






/* Back to top button function */
document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.getElementById("back-to-top-btn");

  // Function to toggle the visibility of the back-to-top button
  function toggleBackToTopButton() {
    const scrollThreshold = 100;


    if (window.scrollY > scrollThreshold) {
      backButton.style.display = "block"; // Show the button
    } else {
      backButton.style.display = "none"; // Hide the button
    }
  }

  // Initial check when the page loads
  toggleBackToTopButton();

  // Add event listener to the window's scroll event
  window.addEventListener("scroll", toggleBackToTopButton);

  // Add click event listener to scroll back to top when the button is clicked
  backButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});






/* Reviews slider function */
document.addEventListener("DOMContentLoaded", function () {
  const containers = Array.from(document.querySelectorAll(".rectangle-container"));
  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");

  let currentIndex = 0;

  function updateContent(index) {
    containers.forEach((container, i) => {
      if (i === index || i === index + 1) {
        container.style.display = "flex";
      } else {
        container.style.display = "none";
      }
    });
  }

  function nextContent() {
    currentIndex = (currentIndex + 1) % (containers.length - 1);
    updateContent(currentIndex);
  }

  function prevContent() {
    currentIndex = (currentIndex - 1 + (containers.length - 1)) % (containers.length - 1);
    updateContent(currentIndex);
  }

  prevArrow.addEventListener("click", function () {
    prevContent();
  });

  nextArrow.addEventListener("click", function () {
    nextContent();
  });

  // Initial content update
  updateContent(currentIndex);
});




/* Pop-Up functions */
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("openPopup");
  const closeButton = document.getElementById("closePopup");
  const createAccountPopup = document.getElementById("createAccountPopup");
  const nextOverlay = document.getElementById("nextOverlay");
  const nextPopup = document.getElementById("nextPopup");
  const closeNextPopupButton = document.getElementById("closeNextPopup");
  const thirdOverlay = document.getElementById("thirdOverlay");
  const thirdPopup = document.getElementById("thirdPopup");
  const closeThirdPopupButton = document.getElementById("closeThirdPopup");
  const overlay = document.getElementById("overlay");
  const form = document.querySelector("#createAccountPopup form");
  const createButton = document.getElementById("createButton");

  function openCreateAccountPopup() {
    createAccountPopup.style.display = "block";
    overlay.style.display = "block";
  }

  function openNextPopup() {
    createAccountPopup.style.display = "none";
    nextOverlay.style.display = "block";
    nextPopup.style.display = "block";
  }

  function openThirdPopup() {
    thirdOverlay.style.display = "block";
    thirdPopup.style.display = "block";
    // Automatically close all popups after 6 seconds
    setTimeout(closePopups, 4000);
  }

  function closePopups() {
    createAccountPopup.style.display = "none";
    nextOverlay.style.display = "none";
    nextPopup.style.display = "none";
    thirdOverlay.style.display = "none";
    thirdPopup.style.display = "none";
    overlay.style.display = "none";
  }

  function handleFormSubmission(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;

    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Repeat Password:", repeatPassword);


    // Close the current popup and open the next one
    closePopups();
    openNextPopup();
  }

  function handleCreateButtonClick() {

    handleFormSubmission(new Event("submit"));
  }

  openButton.addEventListener("click", openCreateAccountPopup);
  closeButton.addEventListener("click", closePopups);
  form.addEventListener("submit", handleFormSubmission);

  // Close the next popup when its close button is clicked
  closeNextPopupButton.addEventListener("click", closePopups);

  // Add click event listener to the "Create" button
  createButton.addEventListener("click", handleCreateButtonClick);

  // Close the third popup when its close button is clicked
  closeThirdPopupButton.addEventListener("click", closePopups);

  // Add click event listener to the "Next" button in the second popup
  document.getElementById("closeNextPopupButton").addEventListener("click", function () {
    closePopups();
    openThirdPopup();
  });
});
