var pauseButton = document.getElementById('pauseButton')
if (pauseButton) {
    pauseButton.addEventListener('click', function () {
        var video = document.getElementById('hero-video');
        if (video.paused) {
            video.play();
            this.textContent = "Pause"; // change button text to 'Pause'
        } else {
            video.pause();
            this.textContent = "Play"; // change button text to 'Play'
        }
    });
}

var skillIcons = document.querySelectorAll('.skill-icon-wrapper');
console.log({skillIcons})
skillIcons.forEach(skillIcon => {
    // mouse enter
    skillIcon.addEventListener('mouseenter', () => {
        var overlay = document.createElement('div')
        overlay.classList.add('overlay')
        overlay.textContent = skillIcon.querySelector('.skill-icon').alt 
        skillIcon.appendChild(overlay)
    })
    // mouse leave
    skillIcon.addEventListener('mouseleave', () => {
        skillIcon.removeChild(skillIcon.lastChild)
    })
}) 