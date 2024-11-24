document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("background-audio");
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(function() {
            console.log("Audio is playing.");
        }).catch(function(error) {
            console.error("Audio playback failed:", error);
        });
    }
});
