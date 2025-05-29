
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const toast = document.getElementById("toast");

    if (email === "admin@email.com" && password === "password") {
      window.location.href = "../catalog/catalog.html";
    } else {
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    }
  });
});
