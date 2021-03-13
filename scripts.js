// Write your JavaScript code here.
// Remember to pay attention to page loading!

const shuttle = document.getElementById("shuttleBackground");
const height = document.getElementById("spaceShuttleHeight");
const status = document.getElementById("flightStatus");

const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

const takeOff = document.getElementById("takeoff");
const land = document.getElementById("landing");
const abort = document.getElementById("missionAbort");

const shuttleIMG = document.getElementById("rocket")

takeOff.addEventListener("click", function() {
    let result = window.confirm("Confirm that the shuttle is ready for takeoff.")

		if (result == true) {
            status.innerHTML = "Shuttle in flight."
            shuttle.style.background = "blue"
            height.innerHTML = "10,000"
        }
})

land.addEventListener("click", function() {

    status.innerHTML = "The shuttle has landed."
    shuttle.style.background = "green"
    height.innerHTML = "0"

})

abort.addEventListener("click", function() {
    let result = window.confirm("Confirm that you want to abort the mission.")

        if (result == true) {
            status.innerHTML = "Mission aborted."
            shuttle.style.background = "green"
            height.innerHTML = "0"
        }
})

let moveUp = 0
let moveDown = 0
let moveLeft = 0
let moveRight = 0


up.addEventListener("click", function(event) {
    
    moveUp += 10

    shuttleIMG.style.marginBottom = moveUp +"px"
    event.stopPropagation();
})


down.addEventListener("click", function(event) {
    
    moveDown += 10

    shuttleIMG.style.paddingTop = moveDown +"px"
    event.stopPropagation();
})

left.addEventListener("click", function() {
    
    moveLeft += 10

    shuttleIMG.style.marginRight = moveLeft +"px"
})

right.addEventListener("click", function() {
    
    moveRight += 10

    shuttleIMG.style.marginLeft = moveRight +"px"
})