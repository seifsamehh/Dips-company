// pwa
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("SW Registered!");
      console.log(registration);
    })
    .catch((error) => {
      console.log("SW Registration Failed!");
      console.log(error);
    });
}
// cookies
document.cookie = "seif=Dips; SameSite=None; Secure";
// start loader
const loader = document.querySelector(".loader");

setTimeout(() => {
  loader.style.display = "none";
}, 1500);
// end loader
// start validation
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
// end validation
// start change title
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
// end change title
// start fixed part
const updateBar = () => {
  const bodyEl = document.body;
  const barEl = document.querySelector(".bar");
  let scrollPos =
    (window.scrollY / (bodyEl.scrollHeight - window.innerHeight)) * 100;
  barEl.style.width = `${scrollPos}%`;
  requestAnimationFrame(updateBar);
};
updateBar();
// end fixed part
// start clip path
window.addEventListener("scroll", () => {
  const element = document.querySelector(".intro");
  if (window.scrollY > 50) {
    element.classList.add("scrolled");
  } else {
    element.classList.remove("scrolled");
  }
});
// end clip path
// start current year
const yearElement = document.querySelector("#year");
yearElement.textContent = new Date().getFullYear();
// end current year
// start scroll to top
const scrollTopIcon = document.querySelector(".arrow");
scrollTopIcon.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// end scroll to top
