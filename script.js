// MENU MOBILE
function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

// DROPDOWN MOBILE
const dropdownBtn = document.querySelector(".dropdown-btn");

if (dropdownBtn) {
    dropdownBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const dropdown = dropdownBtn.parentElement;
        dropdown.classList.toggle("active");
    });
}

// fermer dropdown si clic ailleurs
document.addEventListener("click", () => {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown) dropdown.classList.remove("active");
});

// fermer menu quand on clique sur un lien
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav").classList.remove("active");
    });
});

// TYPING EFFECT
const text = "Développeur web & logiciel";
let i = 0;

function typing() {
    const el = document.getElementById("typing");
    if (!el) return;

    if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 70);
    }
}

window.onload = typing;