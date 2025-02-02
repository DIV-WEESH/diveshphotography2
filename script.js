let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');
const slidesContainer = document.querySelector('.slides');

// Create dots
slides.forEach((slide, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');
dots[0].classList.add('active');

// Function to move slides
function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  updateSlider();
}

// Function to go to a specific slide
function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

// Update slider position and active dot
function updateSlider() {
  slidesContainer.style.transform = `translateX(${-currentSlide * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Auto-slide
setInterval(() => moveSlide(1), 5000); // Change slide every 5 seconds

function redirectToLink() {
    window.location.href = "https://www.instagram.com/divkul.deep?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="; // Replace with your link
  }