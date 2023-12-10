console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName'); // Assuming you have an element with id 'masterSongName'

let songs = [
    { songName: "Midnight Echo", filePath: '1.mp3' },
    { songName: "Serendipity Reverie", filePath: '2.mp3' },
    { songName: "SonVelvet Mirage", filePath: '3.mp3' },
    { songName: "Ethereal Whispers", filePath: '4.mp3' },
    { songName: "Celestial Lullaby", filePath: '5.mp3' },
    { songName: "Nebula Serenade", filePath: '1.mp3' },
    { songName: "Enigmatic Overture", filePath: '2.mp3' },
    { songName: "Mirage Melancholy", filePath: '3.mp3' },
    { songName: "Stellar Dreamscapes", filePath: '4.mp3' },
    { songName: "Dream Bird", filePath: '2.mp3' },
];

Array.from(document.querySelectorAll('songItem')).forEach((element, i) => {
    element.querySelector("img"[0]).src = songs[i].filePath;
    element.querySelector("songName"[0]).innerText = songs[i].songName;
});



// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        // Assuming you have a variable 'gif' or another relevant element to control opacity
        // gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        // gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex + 1].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        // Assuming you have a variable 'gif' or another relevant element to control opacity
        // gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex + 1].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src =songs[songIndex + 1].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});