document.addEventListener("DOMContentLoaded", function() {
    // Display current year in the footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Display the last modified date in the footer
    document.getElementById("lastModified").textContent = document.lastModified;

    // Optional: Toggle active class on navigation links
    const navLinks = document.querySelectorAll("header nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            navLinks.forEach(link => link.classList.remove("active"));
            e.target.classList.add("active");
        });
    });
});
