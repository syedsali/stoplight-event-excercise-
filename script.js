// Part 1


document.getElementById("stopButton").onclick = turnOnRed;
document.getElementById("slowButton").onclick = turnOnYellow;
document.getElementById("goButton").onclick = turnOnGreen;


function lights() {
    document.getElementById("goLight").style.backgroundColor = "#000000";
    document.getElementById("slowLight").style.backgroundColor = "#000000";
    document.getElementById("stopLight").style.backgroundColor = "#000000";


}

function turnOnGreen() {
    lights(Event);
    document.getElementById('goLight').style.backgroundColor = "#00ff00";
}

function turnOnYellow() {
    lights(Event);
    document.getElementById('slowLight').style.backgroundColor = "#FFFF00";
}

function turnOnRed() {
    lights(Event);
    document.getElementById('stopLight').style.backgroundColor = "#FF0000";
};


//Part 2

const handleMouseEnter = (event) => {
    console.log(`Entered ${event.target.textContent} button`);
};

const handleMouseLeave = (event) => {
    console.log(`Left ${event.target.textContent} button`);
};

stopButton.addEventListener('mouseEnter', handleMouseEnter);
slowButton.addEventListener('mouseEnter', handleMouseEnter);
goButton.addEventListener('mouseEnter', handleMouseEnter);

stopButton.addEventListener('mouseLeave', handleMouseLeave);
slowButton.addEventListener('mouseLeave', handleMouseLeave);
goButton.addEventListener('mouseLeave', handleMouseLeave);

