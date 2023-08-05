// Song data
const songList = [
  {
    title: "Sigo Pensándote - Laos, Strolling Rivera, Yhizzu",
    file: "../assets/sigo-pensadote.mp3",
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
    file: "../assets/manos-tijera-camilo-laos.mp3",
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
  })
}

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

// Actualizar barra de progreso de la canción
function updateProgress(event) {
  const { duration, currentTime } = event.srcElement
  const percent = (currentTime / duration) * 100
  progress.style.width = percent + "%"
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
  const links = document.querySelectorAll("a")
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