document.getElementById("buttonD").addEventListener("click", () => {
  changeColors("dem", ["rep", "ind"], "#0057CE", "#adbfff", "#0043a0", "Dfavicon.png");
});

document.getElementById("buttonR").addEventListener("click", () => {
  changeColors("rep", ["dem", "ind"], "#B82100", "#fcb09f", "#971c01", "Rfavicon.png");
});

document.getElementById("buttonI").addEventListener("click", () => {
  changeColors("ind", ["dem", "rep"], "#e7b041", "#ffcd68", "#c09237", "Ifavicon.png");
});

function changeColors(classToShow, classesToHide, mainColor, secondColor, thirdColor, faviconPath) {
  // Change the CSS variables for the colors
  document.documentElement.style.setProperty('--main', mainColor);
  document.documentElement.style.setProperty('--second', secondColor);
  document.documentElement.style.setProperty('--third', thirdColor);

  // Show the selected class and hide the others
  document.querySelector(`.${classToShow}`).style.display = "block";
  classesToHide.forEach(className => {
    document.querySelector(`.${className}`).style.display = "none";
  });

  document.querySelectorAll(".hidden").forEach(el => {
    el.classList.remove("hidden");
  });

  setTimeout(() => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.classList.add("fade-out");

    // Hide the wrapper after the fade-out animation (0.2 seconds)
    setTimeout(() => {
      wrapper.style.display = "none";
    }, 200); // 0.2 seconds for the fade-out animation
  }, 200); // 1-second delay before fading out

  updateFavicon(faviconPath);
}

function updateFavicon(faviconPath) {
  // Get the favicon element by its ID
  const favicon = document.getElementById("favicon");
  
  // Update the href with a cache-busting query parameter
  favicon.href = `${faviconPath}?t=${new Date().getTime()}`;
}

// Select the image element
const cycleImage = document.getElementById('cycleImage');

// Define an array of image sources to cycle through
const imageSources = ['dpa.png', 'rpa.png', 'ipa.png'];
let currentIndex = 0;

// Add a click event listener to the image
cycleImage.addEventListener('click', () => {
    // Update the index to the next image, cycling back to 0 if at the end
    currentIndex = (currentIndex + 1) % imageSources.length;
    // Change the src attribute of the image
    cycleImage.src = imageSources[currentIndex];
});