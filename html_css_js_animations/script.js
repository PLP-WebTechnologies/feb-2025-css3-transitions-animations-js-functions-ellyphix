document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("animateBtn");

  if (localStorage.getItem("buttonClicked") === "true") {
    btn.style.backgroundColor = "#33cc33";
    btn.textContent = "You Already Clicked Me!";
  }

  btn.addEventListener("click", () => {
    btn.style.transition = "all 0.4s ease";
    btn.style.backgroundColor = "#33cc33";
    btn.textContent = "You Clicked Me!";
    localStorage.setItem("buttonClicked", "true");
  });
});
