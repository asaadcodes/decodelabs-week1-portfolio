
// Select the menu button and navigation links

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Function to close the mobile menu

function closeMenu() {
    navLinks.classList.remove("is-open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    menuToggle.textContent = "☰";
}

// Function to toggle the menu

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("is-open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu after clicking a navigation link

const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (link) {

    link.addEventListener("click", closeMenu);

});

// Close menu when Escape key is pressed

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeMenu();
    }

});
