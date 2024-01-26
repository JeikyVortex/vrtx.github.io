//-----------------------------------------------
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
        setTimeout(heheheh, 1750);
        setTimeout(msgs1, 11550);
        setTimeout(msgs2, 43550);
        konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function heheheh() {

const rick = new Audio('./audio/rickroll.mp3');

rick.play();

rick.addEventListener('ended', function() {
    tekken.play();
    });
}

function msgs1(){
    alert("Me van a creer que mi sueño cuando niño era hacer ESTA broma de ESTA forma?");
    alert("Estoy muy feliz haciendo estas cosas. (┬┬◡┬┬) 💕");
}

function msgs2(){
    alert("Es el tema entero, por cierto.");
}