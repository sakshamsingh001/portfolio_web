var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("testimonial");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  setTimeout(showDivs,1000);
}
var slideIndex = 0;
carousel();  

function carousel() {
  var i;
  var x = document.getElementsByClassName("testimonial");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 10000); 
}

// type effect

// const arr= ["Web Developer", "Software Engineer", "UI/UX Designer"];
// let element = document.getElementById('typewriter');
// for(let i=0; i<arr.length; i++){
//     setTimeout(() => {
       
//         element.innerHTML =arr[i];
//     }, 2000*i);
// }
const texts = ["Web Developer", "Programmer", "Tech Enthusiast"];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const element = document.getElementById("typewriter");

  if (!isDeleting && j <= texts[i].length) {
    currentText = texts[i].slice(0, ++j);
  } else if (isDeleting && j >= 0) {
    currentText = texts[i].slice(0, j--);
  }

  element.innerHTML = currentText + "|";

  let delay = isDeleting ? 100 : 200;

  if (!isDeleting && j === texts[i].length) {
    delay = 1000;
    isDeleting = true;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
  }

  setTimeout(typeEffect, delay);
}

// Start typing
typeEffect(); 

// Scroll to top button
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

typeEffect();

// dark theme 

const toggle = document.getElementById("theme-toggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark-theme");
};
