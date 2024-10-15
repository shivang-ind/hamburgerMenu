let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");
  if (ul.className == "showData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

// let slides = document.querySelectorAll(".slide");
// console.log(slides);
// let counter = 0;
// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });

// const slideImage = () => {
//   slides.forEach((slide) => {
//     slide.style.transform = `translateX(-${counter * 100}%)`;
//   });
// };

// const next = () => {
//   counter++;
//   slideImage();
// };

// const prev = () => {
//   counter--;
//   slideImage();
// };
let slideIndex = 1;
showSlides(slideIndex);

// Function to automatically move the slides
function autoSlide() {
  showSlides((slideIndex += 1));
}

// Set an interval to call autoSlide every 3 seconds (adjust as needed)
setInterval(autoSlide, 3000);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
