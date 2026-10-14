// FRASES MOTIVACIONALES
const mensajes = [
    "💪 ¡Tú puedes con las matemáticas!",
    "🧠 Cada error te hace más inteligente",
    "🚀 No te rindas, estás aprendiendo",
    "🔥 Las matemáticas son tu superpoder",
    "📚 Practica hoy, mejora mañana",
    "⭐ Eres capaz de lograrlo",
    "🎯 Paso a paso llegarás lejos"
];

// MOSTRAR MENSAJES AUTOMÁTICOS
let indice = 0;
const mensajeDiv = document.getElementById("mensaje");

function cambiarMensaje() {
    mensajeDiv.textContent = mensajes[indice];
    indice = (indice + 1) % mensajes.length;
}

// CAMBIA CADA 3 SEGUNDOS
setInterval(cambiarMensaje, 3000);

// PRIMER MENSAJE
cambiarMensaje();

// BOTONES
function irPreguntas() {
    window.location.href = "juego.html";
}

function irFormulario() {
    alert("📝 Aquí irán los formularios");
}

function irJuegos() {
    alert("🎮 Más juegos pronto");
}

function irGuia() {
    alert("📖 Guía en construcción");
}

function salir() {
    window.location.href = "index.html";
}