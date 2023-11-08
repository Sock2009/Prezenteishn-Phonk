window.addEventListener("load", function() {
  //при загрузці
  document.getElementById("fon-one").style.backgroundImage = "url('https://img3.akspic.ru/crops/0/6/3/5/7/175360/175360-sportkar-nissan_gt_r-legkovyye_avtomobili-nissan_skyline_gt_r-nissan-1080x1920.jpg')";
  document.getElementById("fon-one").style.width =  "100vw";
  document.getElementById("fon-one").style.height =  "59cm";
  document.getElementById("inf-one").style.display = "block"; 
  document.getElementById("inf-two").style.display = "block"; 
  document.getElementById("info-text").style.display = "block";
  document.getElementById("infos-one").style.display = "block";
  document.getElementById("infos-two").style.display = "none";

  document.getElementById("inf.one.page.two").style.display = "none"; 
  document.getElementById("inf.two.page.two").style.display = "none"; 

  document.getElementById("AudiosOne").style.display = "none"; 
  document.getElementById("AudiosTwo").style.display = "none"; 
  document.getElementById("AudiosThree").style.display = "none";
  document.getElementById("AudiosFour").style.display = "none";
  document.getElementById("AudiosFive").style.display = "none";

  document.getElementById("musicPlayerOne").style.display = "none";
  document.getElementById("musicPlayerTwo").style.display = "none";
  document.getElementById("musicPlayerThree").style.display = "none";
  document.getElementById("musicPlayerFour").style.display = "none";
  document.getElementById("musicPlayerFive").style.display = "none";

  document.getElementById("info-text").style.opacity = "0.9"; 
});
function PagetoInfo() {
  window.scrollTo(0, 0);

  document.getElementById("fon-one").style.backgroundImage = "url('https://img3.akspic.ru/crops/0/6/3/5/7/175360/175360-sportkar-nissan_gt_r-legkovyye_avtomobili-nissan_skyline_gt_r-nissan-1080x1920.jpg')";
  document.getElementById("fon-one").style.width =  "100vw";
  document.getElementById("fon-one").style.height =  "59cm";
  document.getElementById("footer").style.marginTop = "0%";

  document.getElementById("inf-one").style.display = "block"; 
  document.getElementById("inf-two").style.display = "block"; 

  document.getElementById("infos-one").style.display = "block";
  document.getElementById("infos-two").style.display = "none";
  document.getElementById("inf.one.page.two").style.display = "none"; 
  document.getElementById("inf.two.page.two").style.display = "none"; 

  document.getElementById("AudiosOne").style.display = "none"; 
  document.getElementById("AudiosTwo").style.display = "none"; 
  document.getElementById("AudiosThree").style.display = "none"; 
  document.getElementById("AudiosFour").style.display = "none"; 
  document.getElementById("AudiosFive").style.display = "none"; 

  document.getElementById("musicPlayerOne").style.display = "none"; 
  document.getElementById("musicPlayerTwo").style.display = "none";
  document.getElementById("musicPlayerThree").style.display = "none";
  document.getElementById("musicPlayerFour").style.display = "none";
  document.getElementById("musicPlayerFive").style.display = "none";

  document.getElementById("info-text").style.display = "block"; 
}
function PagetoMoreInfo() {
  window.scrollTo(0, 0);

  document.getElementById("fon-one").style.backgroundImage = "url('https://img3.akspic.ru/crops/0/6/3/5/7/175360/175360-sportkar-nissan_gt_r-legkovyye_avtomobili-nissan_skyline_gt_r-nissan-1080x1920.jpg')";
  document.getElementById("fon-one").style.width =  "100vw";
  document.getElementById("fon-one").style.height =  "59cm";
  document.getElementById("footer").style.marginTop = "0%";

  document.getElementById("inf-one").style.display = "none"; 
  document.getElementById("inf-two").style.display = "none"; 
  document.getElementById("infos-one").style.display = "none";
  document.getElementById("infos-two").style.display = "block";

  document.getElementById("inf.one.page.two").style.display = "block"; 
  document.getElementById("inf.two.page.two").style.display = "block"; 

  document.getElementById("AudiosOne").style.display = "none"; 
  document.getElementById("AudiosTwo").style.display = "none"; 
  document.getElementById("AudiosThree").style.display = "none"; 
  document.getElementById("AudiosFour").style.display = "none"; 
  document.getElementById("AudiosFive").style.display = "none"; 

  document.getElementById("musicPlayerOne").style.display = "none";
  document.getElementById("musicPlayerTwo").style.display = "none"; 
  document.getElementById("musicPlayerThree").style.display = "none"; 
  document.getElementById("musicPlayerFour").style.display = "none"; 
  document.getElementById("musicPlayerFive").style.display = "none"; 

  document.getElementById("info-text").style.display = "block"; 
}
function PagetoMusics() {
  window.scrollTo(0, 0);
  //[p]
  document.getElementById("musicPlayerOne").style.display = "block"; 
  document.getElementById("musicPlayerTwo").style.display = "block";
  document.getElementById("musicPlayerThree").style.display = "block";
  document.getElementById("musicPlayerFour").style.display = "block";
  document.getElementById("musicPlayerFive").style.display = "block";

  document.getElementById("AudiosOne").style.display = "block"; 
  document.getElementById("AudiosTwo").style.display = "block"; 
  document.getElementById("AudiosThree").style.display = "block"; 
  document.getElementById("AudiosFour").style.display = "block"; 
  document.getElementById("AudiosFive").style.display = "block"; 

  document.getElementById("inf-two").style.display = "none"; 
  document.getElementById("inf-one").style.display = "none"; 

  document.getElementById("inf.one.page.two").style.display = "none"; 
  document.getElementById("inf.two.page.two").style.display = "none";
  document.getElementById("infos-one").style.display = "none";
  document.getElementById("infos-two").style.display = "none";

  document.getElementById("info-text").style.display = "none";
  document.getElementById("fon-one").style.backgroundImage = "url('https://www.listenspotify.com/uploaded_files/Thf_1659718502.jpg')";
  document.getElementById("fon-one").style.width = "100vw"; // Зробити ширину 100% видимого розміру монітора
  document.getElementById("fon-one").style.height = "100vh"; // Зробити висоту 100% видимого розміру монітора
  document.getElementById("footer").style.marginTop = "-90%";
}

const musicPlayer = document.getElementById('musicPlayer');
const seekBar = document.getElementById('seekBar');

function updateSeekBar() {
  const currentTime = musicPlayer.currentTime;
  const duration = musicPlayer.duration;
  seekBar.value = (currentTime / duration) * 100;
}

musicPlayer.addEventListener('timeupdate', updateSeekBar);




