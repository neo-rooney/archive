//by Rooney, 커스텀 video player_200211
import getBlobDuration from "get-blob-duration";

const videoContrainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumnBtn = document.getElementById("jsVolumeBtn");
const fullScrnBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTiem");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");

//by Rooney, 비디오를 재생_200211
function handlePlayClick() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

//by Rooney, 비디오를 음소거로 변환_200211
function handleVolumnClick() {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        volumnBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        volumeRange.value = videoPlayer.volume;
    } else {
        videoPlayer.muted = true;
        volumnBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        volumeRange.value = 0;
    }
}

//by Rooney, 비디오의 재생이 완료된 경우 조회수 + 1_200211
const registerView = () => {
    const videoId = window.location.href.split("/videos/")[1];
    fetch(`/api/${videoId}/view`, {
        method: "POST"
    });
};

//by Rooney, 비디오 플레이어를 축소 화면으로 변환_200211
function goSmallScreen() {
    fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>';
    fullScrnBtn.addEventListener("click", goFullScreen);
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

//by Rooney, 비디오 플레이어를 전체화면으로 변환_200211
function goFullScreen() {
    if (videoContrainer.requestFullscreen) {
        videoContrainer.requestFullscreen();
    } else if (videoContrainer.mozRequestFullScreen) {
        videoContrainer.mozRequestFullScreen();
    } else if (videoContrainer.webkitRequestFullscreen) {
        videoContrainer.webkitRequestFullscreen();
    } else if (videoContrainer.msRequestFullscreen) {
        videoContrainer.msRequestFullscreen();
    }
    fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>';
    fullScrnBtn.removeEventListener("click", goFullScreen);
    fullScrnBtn.addEventListener("click", goSmallScreen);
}

//by Rooney, 재생시간(초) 를 시 분 초로 변환_200211
const formatDate = seconds => {
    const secondsNumber = parseInt(seconds, 10);
    let hours = Math.floor(secondsNumber / 3600);
    let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        totalSeconds = `0${totalSeconds}`;
    }
    return `${hours}:${minutes}:${totalSeconds}`;
};

//by Rooney, 비디오 파일의 현재 재생 시간을 표시_200211
function getCurrentTime() {
    currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
}

//by Rooney, 비디오 파일을 재생하기전 총 재생 시간을 받아와서 표시_200211
async function setTotalTime() {
    const blob = await fetch(videoPlayer.src).then(response => response.blob());
    const duration = await getBlobDuration(blob);
    const totalTimeString = formatDate(duration);
    totalTime.innerHTML = totalTimeString;
    setInterval(getCurrentTime, 1000);
}

//by Rooney, 재생이 완료된 경우 재생시간을 0으로 초기화_200211
function handleEnded() {
    registerView();
    videoPlayer.currentTime = 0;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

//by Rooney, 커스텀 video player 볼륨조절_200211
function handleDrag(e) {
    const {
        target: { value }
    } = e;
    videoPlayer.volume = value;
    if (value > 0.6) {
        volumnBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else if (value > 0.3) {
        volumnBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
    } else {
        volumnBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
    }
}

function init() {
    videoPlayer.volume = 0.5;
    playBtn.addEventListener("click", handlePlayClick);
    volumnBtn.addEventListener("click", handleVolumnClick);
    fullScrnBtn.addEventListener("click", goFullScreen);
    videoPlayer.addEventListener("loadedmetadata", setTotalTime);
    videoPlayer.addEventListener("ended", handleEnded);
    volumeRange.addEventListener("input", handleDrag);
}

if (videoContrainer) {
    init();
}
