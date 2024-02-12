document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Web Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
let circularProgresses = document.querySelectorAll(".circular-progress");
let speed = 100;

circularProgresses.forEach(circularProgress => {
    let progressValue = circularProgress.querySelector(".progress-value");
    let progressStartValue = 0;
    let progressEndValue = parseInt(progressValue.textContent, 10) || 90; // Get end value from textContent if available, or use 90 as default

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
});
