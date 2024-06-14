//map
var teclas1de1 = {
    52: '4',
    65: 'a',
    69: 'e',
    49: '1',
    76: 'l',
    78: 'n',
    84: 't',
    86: 'v'
};

//codigo
var cod1d1 = ['v','a','l','e','n','t','1','n','4'];

//conteo
var cod1d1Pos = 0;

//detector
document.addEventListener('keydown', function(e){
    //valor
    var tecla = teclas1de1[e.keyCode];
    //toma valor
    var tomaTecla = cod1d1[cod1d1Pos];

    //compara
    if (tecla == tomaTecla) {

        //suma 1
        var audioButton = new Audio('./audio/button.mp3');
        audioButton.volume = 0.5
        audioButton.play();
        cod1d1Pos++;

        //activa
        if (cod1d1Pos == cod1d1.length){
            taDa();
            setTimeout(blossom, 1000)
            cod1d1Pos = 0;
        }
    }else{
        cod1d1Pos = 0;
    }
});

function blossom(){
    alert("Lo siento por llorar");
    alert("Es que te amo mucho");
    window.location.href = "https://www.youtube.com/watch?v=XeaEvZgTKxY";
}