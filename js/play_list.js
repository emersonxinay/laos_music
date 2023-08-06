// Song data
const songList = [
  {
    title: "Sigo Pensándote - Laos, Strolling Rivera, Yhizzu",
    file: "../assets/sigo-pensadote.mp3",
    cover: "../assets/sigo-pensando.jpeg"

  },

  {
    title: "Noche de Abril - Laos ft Lyon Rojas ft Strolling Rivera ft Dafyer ",
    file: "../assets/noche-de-abril-Laos-lyon-f.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  {
    title: "The Weeknd - Save Your Tears (Spanish Versión - Laos) ",
    file: "../assets/laos.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  {
    title: "Am - Nio García ( Versión Laos)",
    file: "../assets/laos2.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  {
    title: " Cray Nwantinti - (Spanish Versión)",
    file: "../assets/laos3.mp3",
    cover: "../assets/sigo-pensando.jpeg"

  },
  {
    title: "Medallo - (cover)",
    file: "../assets/laos4.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  {
    title: "OLD ON -Justin Bieber - (Spanish Versión)",
    file: "../assets/laos5.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  {
    title: "Ppp - (KR -Cover)",
    file: "../assets/laos6.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  {
    title: "Difícil - Laos Ft Lyam Rojas  - Lenny Tavarez (Cover)  ",
    file: "../assets/laos7.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  {
    title: "Souvenir - (lasso -cover)",
    file: "../assets/laos8.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  {
    title: "Mónaco - (lagos -cover)",
    file: "../assets/laos9.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  {
    title: "Una vez mas te pienso - BAND0 FT  LAOS",
    file: "../assets/laos10.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  {
    title: "Tattoo - Camilo Ft Rauw Alejandro (Cover)",
    file: "../assets/laos11.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  // agregados agosto 2023
  {
    title: "Vuelve - (Laos - Tony López)",
    file: "../assets/vuelve-laos-tonylopez.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  {
    title: "Noviembre Sin Ti - Laos (Cover - Reik)",
    file: "../assets/laos-noviembre-sin-si.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  {
    title: "Manos de Tijera - Laos (Cover - Camilo)",
    file: "../assets/manos-tijera-camilo-laos.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
  {
    title: "Te fuiste de Aquí- Laos (Cover - Reik)",
    file: "../assets/te-fuiste-de-aqui-laos-reik.mp3",
    cover: "../assets/sigo-pensando.jpeg"
  },
]

// Canción actual
let actualSong = null

// Capturar elementos del DOM para trabajar con JS
const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const title = document.getElementById("title")
const play = document.getElementById("play")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
progressContainer.addEventListener("click", setProgress)


// Escuchar el elemento AUDIO
audio.addEventListener("timeupdate", updateProgress)

// Escuchar clicks en los controles
play.addEventListener("click", () => {
  if (audio.paused) {
    playSong()
  } else {
    pauseSong()
  }
})

next.addEventListener("click", () => nextSong())
prev.addEventListener("click", () => prevSong())

// Cargar canciones y mostrar el listado
function loadSongs() {
  songList.forEach((song, index) => {
    // Crear li
    const li = document.createElement("li")
    // Crear a
    const link = document.createElement("a")
    // Hidratar a
    link.textContent = song.title
    link.href = "#"
    // Escuchar clicks
    link.addEventListener("click", () => loadSong(index))
    // Añadir a li
    li.appendChild(link)
    // Aañadir li a ul
    songs.appendChild(li)

    // Si es la primera canción, agregar el identificador "firstSong"
    if (index === 0) {
      link.id = "firstSong";
    }
  })
  // Simular clic en el primer enlace para cargar y reproducir la primera canción
  setTimeout(() => {
    const firstSongLink = document.querySelector("#songs a:first-child");
    firstSongLink.click();
    document.getElementById("firstSong").scrollIntoView();
  }, 0); // Se establece el retraso en 0 milisegundos para que ocurra inmediatamente después de que termine la función loadSongs()
}
//::::::::::::>>>>> seccion transcurrir tiempo 
// let isDurationAvailable = false;
// const audioPlayer = document.getElementById("audio");

// const currentTimeElement = document.getElementById("currentTime");
// const durationElement = document.getElementById("duration");

// // Función auxiliar para formatear el tiempo en formato "mm:ss"
// function formatTime(timeInSeconds) {
//   const minutes = Math.floor(timeInSeconds / 60);
//   const seconds = Math.floor(timeInSeconds % 60);
//   return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
// }

// // Actualizar barra de progreso de la canción y tiempo transcurrido
// function updateProgress(event) {
//   const { duration, currentTime } = event.target;
//   const percent = (currentTime / duration) * 100;
//   progress.style.width = percent + "%";

//   // Actualizar tiempo transcurrido
//   currentTimeElement.innerText = formatTime(currentTime);

//   // Si la duración está disponible, actualizar la duración total
//   if (!isNaN(duration) && duration !== Infinity && !isDurationAvailable) {
//     isDurationAvailable = true;
//     durationElement.innerText = formatTime(duration);
//   }
// }

// // Escuchar el evento "durationchange" para actualizar la duración
// audioPlayer.addEventListener("durationchange", updateProgress);

// // Escuchar el evento "timeupdate" para actualizar el progreso
// audioPlayer.addEventListener("timeupdate", updateProgress);

//:::::>>>>>>> fin de transcurrir tiempo

//>>>>>>>> inicio segunda opción transcurrir tiempo

const audioPlayer = document.getElementById("audio");
const currentTimeElement = document.getElementById("currentTime");
const durationElement = document.getElementById("duration");

// Función auxiliar para formatear el tiempo en formato "mm:ss"
function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Actualizar barra de progreso de la canción y tiempo transcurrido
function updateProgress() {
  const { duration, currentTime } = audioPlayer;
  const percent = (currentTime / duration) * 100;
  progress.style.width = percent + "%";

  // Actualizar tiempo transcurrido
  currentTimeElement.innerText = formatTime(currentTime);

  // Actualizar la duración total
  durationElement.innerText = formatTime(duration);
}

// Escuchar el evento "loadedmetadata" para actualizar la duración
audioPlayer.addEventListener("loadedmetadata", updateProgress);

// Escuchar el evento "timeupdate" para actualizar el progreso
audioPlayer.addEventListener("timeupdate", updateProgress);

//>>>>>>>> fin de segunda opción transcurrir tiempo

// Cargar canción seleccionada
function loadSong(songIndex) {
  if (songIndex !== actualSong) {
    changeActiveClass(actualSong, songIndex)
    actualSong = songIndex
    audio.src = "./audio/" + songList[songIndex].file
    playSong()
    changeSongtitle(songIndex)
    changeCover(songIndex)
  }
}



// Hacer la barra de progreso clicable
function setProgress(event) {
  const totalWidth = this.offsetWidth
  const progressWidth = event.offsetX
  const current = (progressWidth / totalWidth) * audio.duration
  audio.currentTime = current
}

// Actualiar controles
function updateControls() {
  if (audio.paused) {
    play.classList.remove("fa-pause")
    play.classList.add("fa-play")
  } else {
    play.classList.add("fa-pause")
    play.classList.remove("fa-play")
  }
}

// Reproducir canción
function playSong() {
  if (actualSong !== null) {
    audio.play()
    updateControls()
  }
}

// Pausar canción
function pauseSong() {
  audio.pause()
  updateControls()
}

// Cambiar clase activa
function changeActiveClass(lastIndex, newIndex) {
  const links = document.querySelectorAll("#songs a")
  if (lastIndex !== null) {
    links[lastIndex].classList.remove("active")
  }
  links[newIndex].classList.add("active")
}

// Cambiar el cover de la canción
function changeCover(songIndex) {
  cover.src = "./img/" + songList[songIndex].cover
}

// Cambiar el título de la canción
function changeSongtitle(songIndex) {
  title.innerText = songList[songIndex].title
}

// Anterior canción
function prevSong() {
  if (actualSong > 0) {
    loadSong(actualSong - 1)
  } else {
    loadSong(songList.length - 1)
  }
}

// Siguiente canción
function nextSong() {
  if (actualSong < songList.length - 1) {
    loadSong(actualSong + 1)
  } else {
    loadSong(0)
  }
}

// Lanzar siguiente canción cuando se acaba la actual
audio.addEventListener("ended", () => nextSong())

// GO!
loadSongs()

//::::::: configurar para que escuche las computadoras
window.onload = function () {
  // Capturar elementos del DOM para trabajar con JS
  const play = document.getElementById("play");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  // Escuchar clics en los controles de reproducción
  play.addEventListener("click", togglePlay);
  next.addEventListener("click", () => nextSong());
  prev.addEventListener("click", () => prevSong());

  // Escuchar clics en los controles de reproducción (para Brave)
  document.addEventListener("click", enableAudio);

  // Escuchar eventos de teclado para avanzar y retroceder
  document.addEventListener("keydown", handleKeyboard);

  // Función para habilitar la reproducción de audio
  function enableAudio() {
    audio.play().then(() => {
      audio.pause();
      document.removeEventListener("click", enableAudio);
    });
  }

  // Función para manejar eventos de teclado
  function handleKeyboard(event) {
    // Obtener la tecla presionada
    const key = event.key;

    // Verificar qué tecla se ha presionado y realizar la acción correspondiente
    if (key === " ") {
      togglePlay(); // Reproducir o pausar la canción con la tecla de espacio
    } else if (key === "ArrowRight") {
      nextSong(); // Avanzar a la siguiente canción con la tecla de flecha derecha
    } else if (key === "ArrowLeft") {
      prevSong(); // Retroceder a la canción anterior con la tecla de flecha izquierda
    }
  }
};
