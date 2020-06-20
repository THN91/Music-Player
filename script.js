const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


const songs = ['The xx - Intro', 'Foster The People - Pumped Up Kicks', 'Alt-J - Every Other Freckle'];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
    console.log(song)
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`
}