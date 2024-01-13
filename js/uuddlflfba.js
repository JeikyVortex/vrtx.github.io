// mapeo
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// codigo konami
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// conteo por tecla
var konamiCodePosition = 0;

// cuando detecta una tecla
document.addEventListener('keydown', function(e) {
  // aqui toma el valor de la tecla
  var key = allowedKeys[e.keyCode];
  // toma el valor de la tecla para el codigo
  var requiredKey = konamiCode[konamiCodePosition];

  // compara la tecla con las teclas requeridas
  if (key == requiredKey) {

    // suma uno si sigue bien la secuencia
    konamiCodePosition++;

    // si la ultima esta bien, lo activa
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  var audio = new Audio('./audio/tada.mp3');
  audio.play();

  alert("Bien, lo encontraste~");
  alert("Bueh, el secreto es este, apreta aceptar");

  window.location.href = "http://www.youtube.com/watch?v=qDaGbLzUnrQ";
}