function toggleMenu() {
    const nav = document.getElementById("sideNav");
    nav.style.left = nav.style.left === "0px" ? "-250px" : "0px";
}

const songs = ["/Arabic_music_-__Halet_Hob_(Remix)_2018(256k) - Copy.mp3",
    "/Agar_Tum_Benaqab_Aiy_Heaven_Lyrics_#slowed_#reverb_#new(360p).mp4",
    "/Arabic_Remix_-_Khalouni_N3ich__Yusuf_Ekşioğlu_Remix____6_Underground_[Ryan_Reynolds_Chase_Scene](256k).mp3",
    "/Dilbaro.mp3",
    "/Gardishe_chashme_siyahi_tu_khushame_ayat_Song_Lyri720P_HD(128kbps).mp3",
    "/𝐓𝐞𝐫𝐚_𝐌𝐞𝐫𝐚_𝐇𝐚𝐢_𝐏𝐲𝐚𝐫_𝐀𝐦𝐚𝐫❤️Ishq_Murshid_-_[_OST_]_-_Singer__Ahmed_Jahanzeb(256k).mp3",
    "/Tumhe_Kya_Batau_k_Tum_Mere_Kya_Ho...(256k).mp3",
    "/Патимат_Расулова_-_Карие_глаза__Cover_version___Patimat_Rasulova_-Tik_Tok_trend_🫶_2023_-_By_DAMARC1(256k).mp3"];

let currentSong = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

function loadSong(index) {
    currentSong = index;
    audio.src = songs[index];
    audio.play();
    playBtn.className = "fa-solid fa-pause";
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playBtn.className = "fa-solid fa-pause";
    } else {
        audio.pause();
        playBtn.className = "fa-solid fa-play";
    }
}

function nextSong() {
    loadSong((currentSong + 1) % songs.length);
}

function prevSong() {
    loadSong((currentSong - 1 + songs.length) % songs.length);
}

function changeVolume(val) {
    audio.volume = val;
}

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

function formatTime(time) {
    if (isNaN(time)) return "0:00";
    return Math.floor(time / 60) + ":" + Math.floor(time % 60).toString().padStart(2, "0");
}

loadSong(0);
