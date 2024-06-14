var tekken = document.createElement("AUDIO")
document.body.appendChild(tekken);
tekken.src = "./audio/bg.mp3"
tekken.volume = 0.50

document.body.addEventListener("mousemove", function () {
  tekken.play()
})