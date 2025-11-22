var typed = new Typed("#typed-name", {
  strings: ["WELCOME TO MY PORTFOLIO"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});
var SS = new Typed("#SS-name", {
  strings: ["HI !! THIS IS SADIQSHAIK"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});
var SK = new Typed("#SK-name", {
  strings: ["I AM FULLSTACK WEB DEVELOPER","FRONTEND DESIGNER","PYTHON PROGRAMMER"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});
const accordions = document.querySelectorAll(".info-header");

accordions.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    setTimeout(() => {
      alert("Thank you! Your message has been sent.");
    }, 500);
  });