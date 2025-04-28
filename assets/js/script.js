// Ejercicio 1
document.getElementById("imagen-toggle").addEventListener("click", function () {
    this.classList.toggle("borde-rojo");
});

// Ejercicio 2
function verificarStickers() {
    const s1 = parseInt(document.getElementById("sticker1").value) || 0;
    const s2 = parseInt(document.getElementById("sticker2").value) || 0;
    const s3 = parseInt(document.getElementById("sticker3").value) || 0;

    const total = s1 + s2 + s3;
    const mensaje = document.getElementById("mensaje-stickers");

    if (total <= 10) {
        mensaje.textContent = `Llevas ${total} stickers`;
    } else {
        mensaje.textContent = "Llevas demasiados stickers";
    }
}

// Ejercicio 3
function verificarPassword() {
    const p1 = document.getElementById("digit1").value;
    const p2 = document.getElementById("digit2").value;
    const p3 = document.getElementById("digit3").value;

    const password = p1 + p2 + p3;
    const mensaje = document.getElementById("mensaje-password");

    if (password === "911") {
        mensaje.textContent = "password 1 correcto";
    } else if (password === "714") {
        mensaje.textContent = "password 2 es correcto";
    } else {
        mensaje.textContent = "password incorrecto";
    }
}
