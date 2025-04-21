var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("testimonial");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length } ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";

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
// window.onscroll = () => {
//   // topBtn.style.display = window.scrollY > 300 ? "block" : "none";
// };

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

typeEffect();

// dark theme 

const change=document.querySelector("#change-theme");
const body=document.querySelector("body");
let boolean=true;
change.addEventListener("click",function(){
   
    if(boolean){
      boolean=false
        change.innerHTML="🌞";
        document.documentElement.style.setProperty('--background', '#F5F7FA');
        document.documentElement.style.setProperty('--card-background', '#FFFFFF');
        document.documentElement.style.setProperty('--text-primary', '#1A1F2C');
        document.documentElement.style.setProperty('--text-secondary', '#6B7280');
        document.documentElement.style.setProperty('--accent-color', '#FEF7CD');
    }else{
      boolean=true
        change.innerHTML="🌜";
        document.documentElement.style.setProperty('--background', '#121417');
        document.documentElement.style.setProperty('--card-background', '#1E2228');
        document.documentElement.style.setProperty('--text-primary', '#E4E4E4');
        document.documentElement.style.setProperty('--text-secondary', '#A0A4AB');
        document.documentElement.style.setProperty('--accent-color', '#4F9AFF');
    }
})
let card=document.querySelectorAll(".project-card")
console.log(card)
card.forEach((e)=>{   
    e.addEventListener("mouseover",function(){
        e.style.transform="scale(1.05)"

    })
    e.addEventListener("mouseout",function(){
        e.style.transform="scale(1)"
    })
}
) 

