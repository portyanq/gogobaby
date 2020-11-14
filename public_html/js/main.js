const circle = document.querySelector('.circle');
const menuLine = document.querySelectorAll('.line');
const li = document.querySelectorAll('li');
var sideBarState = false;




document.querySelector(".hamburg").onclick = function () {
    if(sideBarState == true){
        console.log('close')
        sideBarClose();
        sideBarState = false;
    }else{
    console.log('open')
        sideBarOpen();
        sideBarState = true;
    }

    


};

function sideBarOpen() {
    menuLine.forEach(function (currentValue) {
        currentValue.style.stroke = "#000"
    })
    circle.style.clipPath = "circle(" + 270 +"px at " + 0 + " " + 150 +"px)";
    li.forEach(function (currentValue) {
        currentValue.style.transform = "translatex(" + 210 + "px)";
    })
}
function sideBarClose() {
    menuLine.forEach(function (currentValue) {
        currentValue.style.stroke = "#fff"
    })
    circle.style.clipPath = "circle(" + 0 +"px at " + 0 + " " + 150 +"px)";
    li.forEach(function (currentValue) {
        currentValue.style.transform = "translatex(" + 0 + "px)";
    })
}