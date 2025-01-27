document.addEventListener("DOMContentLoaded", () => {
  const langToggleBtn = document.getElementById("language-toggle-btn");
  const langFlag = document.getElementById("language-flag");
  const langElements = document.querySelectorAll("[data-lang-en]");
  let currentLang = "en"; // Default language is English

  // Set the initial flag and text content
  langFlag.className = "flag-icon flag-icon-sk"; // Default is Slovak flag
  langToggleBtn.querySelector("span:last-child").textContent = "sk"; // Button text starts with "sk"

  langToggleBtn.addEventListener("click", () => {
      // Toggle language
      if (currentLang === "en") {
          currentLang = "sk"; // Switch to Slovak
          langFlag.className = "flag-icon flag-icon-us"; // Switch to US flag
          langToggleBtn.querySelector("span:last-child").textContent = "en"; // Change button text to "en"
      } else {
          currentLang = "en"; // Switch to English
          langFlag.className = "flag-icon flag-icon-sk"; // Switch to Slovak flag
          langToggleBtn.querySelector("span:last-child").textContent = "sk"; // Change button text to "sk"
      }

      // Update all text based on the selected language
      langElements.forEach((element) => {
          element.innerHTML = element.getAttribute(`data-lang-${currentLang}`);
      });

      // Update the icon explanation image based on the language
      const iconExplanationImg = document.getElementById("icons-explanation-img");
      iconExplanationImg.src = currentLang === "en" 
          ? "2-Corners-images/Floorball_explanations_EN.jpg"
          : "2-Corners-images/Floorball_explanations_SK.jpg"; // Update image source when language switches

      // Update the image carousel based on the selected language
      updateImage(currentIndex);
  });

  // List of images, make sure the preview image is first
  const images = [
      { src: "2-Corners-images/2_Corners_preview.jpg", description: { en: "Use the arrows to switch to the individual steps of the exercise.", sk: "Použite šípky na prepínanie medzi jednotlivými krokmi cvičenia." } },
      { src: "2-Corners-images/2_Corners_Setup.jpg", description: { en: "Basic cone and player setup for practice.", sk: "Základné rozostavenie kužeľov a hráčov na cvičenie." } },
      { src: "2-Corners-images/2_Corners_1.jpg", description: { en: "The player runs to the cone from behind.", sk: "Hráč beží ku kužeľu zozadu." } },
      { src: "2-Corners-images/2_Corners_2.jpg", description: { en: "The player receives a pass from a player on the opposite side.", sk: "Hráč dostane prihrávku od hráča na opačnej strane." } },
      { src: "2-Corners-images/2_Corners_3.jpg", description: { en: "After receiving the pass, he shoots at the goal and joins the row opposite to the one he ran from (the row he received the pass from). At the same time, the player who passed him the ball runs to the cone from behind.", sk: "Po prijatí prihrávky vystrelí na bránu a zaradí sa do radu oproti tomu, z ktorého vybehol (rad, z ktorého dostal prihrávku). Zároveň hráč, ktorý mu prihral loptu, beží ku kužeľu zozadu." } },
      { src: "2-Corners-images/2_Corners_4.jpg", description: { en: "The player who is now at the cone receives a pass from the opposite row.", sk: "Hráč, ktorý je teraz pri kuželi, dostane prihrávku z opačnej strany." } },
      { src: "2-Corners-images/2_Corners_5.jpg", description: { en: "The player shoots at the goal and at the same time the player who passed to him runs towards the cone from behind. The whole cycle then repeats.", sk: "Hráč vystrelí na bránu a zároveň hráč, ktorý mu prihral, beží k kužeľu zozadu. Celý cyklus sa následne opakuje." } }
  ];

  let currentIndex = 0; // Start at the preview image (index 0)

  // Select the elements
  const mainImage = document.getElementById("main-image");
  const imageDescription = document.getElementById("image-description");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const stepText = document.getElementById("step-text");

  // Function to update the image and description
  function updateImage(index) {
      mainImage.src = images[index].src;
      imageDescription.textContent = images[index].description[currentLang];

      if (index === 0) {
          stepText.textContent = currentLang === "en" ? "Preview" : "Náhľad";
      } else if (index === 1) {
          stepText.textContent = currentLang === "en" ? "Setup" : "Nastavenie";
      } else {
          stepText.textContent = currentLang === "en" ? `Step ${index - 1}` : `Krok ${index - 1}`; // Adjusting for steps (1-5)
      }
  }

  // Event listener for the "prev" button
  prevButton.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop around
      updateImage(currentIndex);
  });

  // Event listener for the "next" button
  nextButton.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % images.length; // Loop around
      updateImage(currentIndex);
  });

  window.goBack = function () {
      window.location.href = "floorball-drills.html";
  };

  // Initialize the carousel with the preview image
  updateImage(currentIndex);
});
