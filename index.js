document.addEventListener("keypress", function (event) {
    var keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
})

function makeSound(key) {
    var audio;
    switch (key) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3")
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3")
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3")
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3")
            break;
        case "j":
            audio = new Audio("./sounds/crash.mp3")
            break;
        case "k":
            audio = new Audio("./sounds/snare.mp3")
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3")
            break;
        default:
            audio = new Audio("./sounds/tom-1.mp3")
            break;
    }
    audio.play();
}

function buttonAnimation(key) {
    var active = document.querySelector("." + key)
    active.classList.add("pressed");
    setTimeout(function () {
        active.classList.remove("pressed");
    }, 100)
}