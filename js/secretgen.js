function shoot() {
  var audio = new Audio('./audio/tada.mp3');
  audio.play();
  setTimeout(msg, 1000);
}

function msg() {
  alert("Asi es, vas a fallar");
  alert("Una y otra y otra y otra vez");
  alert("Y otra y otra y otra vez");
  alert("Y esta bien");
  alert("Porque asi se aprende...");

  window.location.href = "https://www.youtube.com/embed/-C-2AqRD8io?autoplay=1&cc_load_policy=1&cc_lang_pref=es";
}