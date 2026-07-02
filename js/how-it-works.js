document.addEventListener("DOMContentLoaded", function () {
  const stepItems = document.querySelectorAll(".step-item");
  const stepImages = document.querySelectorAll(".step-image");
  let currentStep = 1;
  let autoPlayInterval;

  function updateStep(stepNumber) {
    // Remove active class from all step items
    stepItems.forEach((step) => step.classList.remove("active"));

    // Add active class to target step
    const targetStep = document.querySelector(
      `.step-item[data-step="${stepNumber}"]`,
    );
    if (targetStep) {
      targetStep.classList.add("active");
    }

    // Remove active class from all images
    stepImages.forEach((img) => img.classList.remove("active"));

    // Add active class to corresponding image
    const activeImage = document.querySelector(
      `.step-image[data-image="${stepNumber}"]`,
    );
    if (activeImage) {
      activeImage.classList.add("active");
    }

    currentStep = stepNumber;
  }

  function autoPlay() {
    const totalSteps = stepItems.length;
    let nextStep = currentStep + 1;
    if (nextStep > totalSteps) {
      nextStep = 1;
    }
    updateStep(nextStep);
  }

  // Start auto-play
  autoPlayInterval = setInterval(autoPlay, 5000);

  // Click events for manual navigation
  stepItems.forEach((item) => {
    item.addEventListener("click", function () {
      const stepNumber = this.getAttribute("data-step");
      updateStep(stepNumber);
      // Reset interval on manual click
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(autoPlay, 5000);
    });
  });

  // Pause auto-play on hover, resume on leave
  const stepsWrapper = document.querySelector(".steps-wrapper");
  if (stepsWrapper) {
    stepsWrapper.addEventListener("mouseenter", function () {
      clearInterval(autoPlayInterval);
    });
    stepsWrapper.addEventListener("mouseleave", function () {
      autoPlayInterval = setInterval(autoPlay, 5000);
    });
  }

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".toggle-icon");

    const updateAnswerHeight = () => {
      if (item.classList.contains("active")) {
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        answer.style.opacity = "1";
        icon.textContent = "−";
      } else {
        answer.style.maxHeight = null;
        answer.style.opacity = "0";
        icon.textContent = "+";
      }
    };

    if (item.classList.contains("active")) {
      updateAnswerHeight();
    }

    header.addEventListener("click", function () {
      item.classList.toggle("active");
      updateAnswerHeight();
    });
  });

  const scrollToTopButton = document.getElementById("scroll-to-top");
  if (scrollToTopButton) {
    const toggleButtonVisibility = () => {
      scrollToTopButton.classList.toggle("show", window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleButtonVisibility);
    toggleButtonVisibility();

    scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
