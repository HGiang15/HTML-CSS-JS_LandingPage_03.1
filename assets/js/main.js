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
