// add fund card
let checkbox = document.querySelectorAll(".radio");
let b = false;
function checkChange() {
  b = !b;
  if (b) {
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked === false) {
        checkbox[i].disabled = "true";
      }
    }
  } else {
    for (let i = 0; i < checkbox.length; i++) {
      checkbox[i].removeAttribute("disabled");
    }
  }
}

// sign in and sign up page circle animation
const circles = document.querySelector(".circles");

setInterval(() => {
  if (circles.classList.contains("active")) {
    circles.classList.remove("active");
  } else {
    circles.classList.add("active");
  }
}, 3000);
