var pauseButton = document.getElementById('pauseButton')
if (pauseButton) {
    pauseButton.addEventListener('click', function () {
        var video = document.getElementById('hero-video');
        var imgElement = this.getElementsByTagName('img')[0];
        if (video.paused) {
            video.play();
            imgElement.src="portfolio/images/icons/pause-button.png"; // change button text to 'Pause'
        } else {
            video.pause();
            imgElement.src = "portfolio/images/icons/play-button.png"; // change button text to 'Play'
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

var hamburgerOpen = document.getElementById('hamburger-button-open');
var nav = document.getElementById('navbar-burger');

console.log(hamburgerOpen);
console.log(nav)

// hamburgerOpen.addEventListener('click', () => {
//     console.log("click")
//     nav.style.width = nav.style.width === "100vw" ? "0" : "100vw";
//     nav.style.display = nav.style.display === "flex" ? "none" : "flex";
//     e.preventDefault()
//     e.stopPropagation()
// });
//
// hamburgerOpen.addEventListener('touchstart', (e) => {
//     console.log("touchstart")
//     nav.style.width = nav.style.width === "100vw" ? "0" : "100vw";
//     nav.style.display = nav.style.display === "flex" ? "none" : "flex";
//     e.preventDefault()
//     e.stopPropagation()
// });