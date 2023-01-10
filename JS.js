//Hamburgericon
function toggleMobileMenu(menu) {
    menu.classList.toggle('open')
}

//Go to Top button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function gotopFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
topbutton = document.getElementById("goTop");
window.onscroll = function() {scrollFunction()};

//Thank you popup
const nextStep = document.querySelector('#submitbut');

submitbut.addEventListener('click', function () {
e.preventDefault();

document.getElementById('contactFormula').style.display = 'none';

document.getElementById('thankYou').style.display = 'block';
});
