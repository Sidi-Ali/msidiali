var tabLinks = document.getElementsByClassName("tab-item");
var tabContent = document.getElementsByClassName("tab-content");

function openTab(tab){
  for (i of tabLinks){
    i.classList.remove("active");
  }
  for (j of tabContent){
    j.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(tab).classList.add("active-tab");
}


function openMenu(){
  document.querySelector("nav ul").classList.add("openNav");
  document.querySelector("img").classList.add("body-color");
  document.querySelector("h1").classList.add("body-color");
}

function closeMenu(){
  document.querySelector("nav ul").classList.remove("openNav");
  document.querySelector("img").classList.remove("body-color");
  document.querySelector("h1").classList.remove("body-color");
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwiRy3iAYfHrMivAfg2nSPydl1IgAgIlSRc5VR7DIvUIL7ALxaZvmHmR1uEilcAQZ3bEw/exec'
const form = document.forms['submit-to-google-sheet']
const confirmation = document.querySelector("form p")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      confirmation.style.visibility = "visible"
      setTimeout(function () {
        confirmation.style.visibility = "hidden";

      }, 5000)
      form.reset();
    }
  )

    .catch(error => console.error('Error!', error.message))
})
