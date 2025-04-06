const input = document.getElementById("email");

input.addEventListener("focus", () => {
    input.style.transition = "border-color 0.5s ease, opacity 0.5s ease";
});