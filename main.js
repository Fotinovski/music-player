const playBtn = document.querySelector(".fa-play-circle");
const stopBtn = document.querySelector(".fa-stop-circle");
const volumeBtn = document.querySelector(".fa-volume-up");

var wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#fff",
  progressColor: "purple",
  barWidth: 3,
  height: 80,
  responsive: true,
  hideScrollbar: true,
  barRadius: 2,
});

wavesurfer.load("./assets/thelight.mp3");

playBtn.onclick = () => {
  wavesurfer.playPause();
  if (playBtn.classList.contains("fa-play-circle")) {
    playBtn.classList.remove("fa-play-circle");
    playBtn.classList.add("fas", "fa-pause-circle");
  } else {
    playBtn.classList.remove("fa-pause-circle");
    playBtn.classList.add("fas", "fa-play-circle");
  }
};

stopBtn.onclick = () => {
  wavesurfer.stop();
  playBtn.classList.remove("fa-pause-circle");
  playBtn.classList.add("fas", "fa-play-circle");
};

volumeBtn.onclick = () => {
  wavesurfer.toggleMute();
  if (volumeBtn.classList.contains("fa-volume-up")) {
    volumeBtn.classList.remove("fa-volume-up");
    volumeBtn.classList.add("fas", "fa-volume-mute");
  } else {
    volumeBtn.classList.remove("fa-volume-mute");
    volumeBtn.classList.add("fas", "fa-volume-up");
  }
};

wavesurfer.on("finish", () => {
  playBtn.classList.remove("fa-pause-circle");
  playBtn.classList.add("fas", "fa-play-circle");
  wavesurfer.stop();
});
