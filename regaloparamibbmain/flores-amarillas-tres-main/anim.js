// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Y si te parece, que yo estoy enamorado tuyo", time: 13.2 },
  { text: "Eso es un invento, intuyo, no des créditos a murmullos", time: 17.5 },
  { text: "Porque casi nunca llamo para decir que te amo", time: 23 },
  { text: "Y más de una vez lo hice a un número equivocado", time: 28 },
  { text: "Casi nunca nadie dice que yo estoy enamorado", time: 33 },
  { text: "Tuyo", time: 36 },
  { text: "Raramente desespero por tener aquí a mi lado", time: 43 },
  { text: "Y eso no significa que tenga un significado", time: 47 },
  { text: "Si piensas que amor yo siento, por favor, no hagas pamento", time: 53 },
  { text: "No comentes con tu gente sobre nuestro asunto", time: 58 },
  { text: "Casi nunca nadie dice que yo estoy enamorado", time: 63 },
  { text: "Tuyo", time: 66 },
  { text: "No te vistas, no te hagás la nunca vista", time: 73 },
  { text: "Tengo en vista cantarte un Hasta la Vista", time: 78 },
  { text: "No te vistas, no te hagás la nunca vista", time: 83 },
  { text: "Tengo lista una canción que dice Hasta la vista", time: 88 },
  { text: "Se-ño-ri-ta", time: 91.7 },
  { text: "Casi nunca veo la foto tuya en mi celular", time: 105 },
  { text: "Sigue ahi por la pereza que me da apretar, borrar", time: 111 },
  { text: "No estoy tan obsesionado, vale como aclaración", time: 116 },
  { text: "Si pensas que es por eso que yo canto esta canción", time: 120 },
  { text: "Casi nunca nadie dice que yo estoy enamorado", time: 126 },
  { text: "Tuyo", time: 129 },
  { text: "No te vistas, no te hagas la nunca vista", time: 135 },
  { text: "Tengo en vista cantarte un Hasta la vista", time: 140 },
  { text: "No te vistas, no te hagas la nunca vista", time: 145 },
  { text: "Tengo lista una canción que dice Hasta la vista", time: 150 },
  { text: "Se-ño-ri-ta", time: 153.7 },
  { text: "Y si te parece que yo estoy enamorado tuyo", time: 158 },
  { text: "Eso es un invento, intuyo, no des creditos a murmullos", time: 163 },
  { text: "Te quiero muchisimo, mi corazón de melón.", time: 168 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);