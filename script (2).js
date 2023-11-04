window.addEventListener("load", function() {
  //при загрузці
  document.getElementById("inf-one").style.display = "block"; 
  document.getElementById("inf-two").style.display = "block"; 
  document.getElementById("info-text").style.display = "block";

  document.getElementById("inf.one.page.two").style.display = "none"; 
  document.getElementById("inf.two.page.two").style.display = "none"; 
  document.getElementById("Audiosone").style.display = "none"; 
  document.getElementById("Audiostwo").style.display = "none"; 
  document.getElementById("musicPlayer").style.display = "none";
  document.getElementById("musicPlayer1").style.display = "none";

  document.getElementById("info-text").style.opacity = "0.9"; 
});
function PagetoInfo() {
  //прогортування до верху

  document.getElementById("inf-one").style.display = "block"; 
  document.getElementById("inf-two").style.display = "block"; 

  document.getElementById("inf.one.page.two").style.display = "none"; 
  document.getElementById("inf.two.page.two").style.display = "none"; 
  document.getElementById("Audiosone").style.display = "none"; 
  document.getElementById("Audiostwo").style.display = "none"; 
  document.getElementById("musicPlayer").style.display = "none"; 
  document.getElementById("musicPlayer1").style.display = "none";

  document.getElementById("info-text").style.opacity = "0.9"; 
}
function PagetoMoreInfo() {
  //прогортування до верху

  document.getElementById("inf-one").style.display = "none"; 
  document.getElementById("inf-two").style.display = "none"; 

  document.getElementById("inf.one.page.two").style.display = "block"; 
  document.getElementById("inf.two.page.two").style.display = "block"; 
  document.getElementById("Audiosone").style.display = "none"; 
  document.getElementById("Audiostwo").style.display = "none"; 
  document.getElementById("musicPlayer").style.display = "none";
  document.getElementById("musicPlayer1").style.display = "none"; 

  document.getElementById("info-text").style.opacity = "0.9"; 
}
function PagetoMusics() {
  //[p]
  document.getElementById("musicPlayer").style.display = "block"; 
  document.getElementById("musicPlayer1").style.display = "block";
  document.getElementById("Audiosone").style.display = "block"; 
  document.getElementById("Audiostwo").style.display = "block"; 

  document.getElementById("inf-two").style.display = "none"; 
  document.getElementById("inf-one").style.display = "none"; 

  document.getElementById("inf.one.page.two").style.display = "none"; 
  document.getElementById("inf.two.page.two").style.display = "none";

  document.getElementById("info-text").style.opacity = "0"; 
  document.getElementById("Audios").style.opacity = "1";
}

const musicPlayer = document.getElementById('musicPlayer');
const seekBar = document.getElementById('seekBar');

function updateSeekBar() {
  const currentTime = musicPlayer.currentTime;
  const duration = musicPlayer.duration;
  seekBar.value = (currentTime / duration) * 100;
}

musicPlayer.addEventListener('timeupdate', updateSeekBar);




