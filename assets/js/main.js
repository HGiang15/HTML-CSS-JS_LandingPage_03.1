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

// Show the scroll-to-top button when scrolling down
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// Show the scroll-to-top button when scrolling down
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

const video = document.getElementById("myVideo");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
  } else {
    video.pause();
  }
});

video.addEventListener("play", () => {
  playButton.style.display = "none";
});

video.addEventListener("pause", () => {
  playButton.style.display = "block";
});
document.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var scrollPosition = window.scrollY;

  // Điều kiện kiểm tra khi nào nên thêm/xóa lớp 'scrolled'
  if (scrollPosition > 100) {
    // Ví dụ, nếu cuộn xuống 100px thì thêm lớp
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
