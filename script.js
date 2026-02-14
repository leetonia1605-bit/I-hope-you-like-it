const images = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg",
  "pic6.jpg",
  "pic7.jpg"
];

let currentIndex = 0;
let startX = 0;

// 🎶 Keep music playing across pages
window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");
  if (localStorage.getItem("musicPlaying")) {
    music.play().catch(() => {});
  }
});

function startMusicAndGo() {
  const music = document.getElementById("bgMusic");
  music.play();
  localStorage.setItem("musicPlaying", "true");
  window.location.href = "index.html";
}

// Viewer
function openViewer(index) {
  currentIndex = index;
  document.getElementById("viewer").style.display = "flex";
  document.getElementById("viewerImg").src = images[currentIndex];
}

function closeViewer() {
  document.getElementById("viewer").style.display = "none";
}

// Swipe
document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  const diff = e.changedTouches[0].clientX - startX;
  if (Math.abs(diff) > 50) {
    diff < 0 ? nextImage() : prevImage();
  }
});

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("viewerImg").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("viewerImg").src = images[currentIndex];
}


