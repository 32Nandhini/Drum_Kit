var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key.toUpperCase());
    buttonAnimation(event.key.toUpperCase());
});

function makeSound(key) {
    switch (key) {
        case "U":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "H":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "K":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "S":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "N":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "I":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "Q":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(key);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
