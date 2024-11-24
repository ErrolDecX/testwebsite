document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("background-audio");
    audio.play();

    setTimeout(function() {
        audio.muted = false;
    }, 1000); // 1 second delay to unmute
});
