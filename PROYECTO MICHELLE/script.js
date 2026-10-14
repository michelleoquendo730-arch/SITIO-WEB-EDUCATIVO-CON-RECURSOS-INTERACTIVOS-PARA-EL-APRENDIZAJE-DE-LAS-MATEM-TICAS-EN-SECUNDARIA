const mensajes = [
    "🧠 Piensa, intenta y aprende",
    "🚀 Cada intento te hace mejor",
    "💪 No te rindas, sigue practicando",
    "📘 Aprende jugando",
    "🎯 Tú puedes lograrlo",
    "⭐ Confía en ti mismo"
];

let indice = 0;

function mostrarMensaje() {
    const elemento = document.getElementById("motivacion");

    elemento.textContent = mensajes[indice];
}
    indice++;
    if (indice >= mensajes.length) {
        indice = 0;
    }
