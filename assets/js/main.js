//Header
// cop menu PC to menu Mobile
const pcNav = document.querySelector("#pc-nav");
const mobileNav = document.querySelector("#mobile-nav");

// cop from PC nav to Mobile nav
mobileNav.innerHTML = pcNav.innerHTML;

// Navbar
const links = document.querySelectorAll(".navbar__link");
const homeLink = document.getElementById("homeLink");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent default anchor behavior
    event.preventDefault();

    // Remove active class from all links
    links.forEach((link) => link.classList.remove("navbar__link--active"));

    // Add active class to the clicked link
    link.classList.add("navbar__link--active");

    // Scroll to the corresponding section or to the top if 'Home' is clicked
    if (link === homeLink) {
      scrollToTop();
    } else {
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Feature Video
const playButton = document.getElementById("playButton");
const videoPlayer = document.getElementById("myVideo");
playButton.addEventListener("click", () => {
  // Play video
  videoPlayer.play();
  // Hide the play button
  playButton.style.display = "none";
});
