document.addEventListener("DOMContentLoaded", function () {
  // Set current year
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Set last modified date
  const lastModifiedEl = document.getElementById("lastModified");
  if (lastModifiedEl) {
    lastModifiedEl.textContent = document.lastModified;
  }

  // Highlight active navigation link
  const navLinks = document.querySelectorAll("header nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      navLinks.forEach((l) => l.classList.remove("active"));
      e.target.classList.add("active");
    });
  });
});
