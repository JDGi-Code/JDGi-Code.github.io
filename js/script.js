document.getElementById('pauseButton').addEventListener('click', function () {
    var video = document.getElementById('hero-video');
    if (video.paused) {
        video.play();
        this.textContent = "Pause"; // change button text to 'Pause'
    } else {
        video.pause();
        this.textContent = "Play"; // change button text to 'Play'
    }
});
