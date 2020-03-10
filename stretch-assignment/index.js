let orderNum = 0;
let millisecondsElapsed = 0;
document.querySelectorAll(".block").forEach( (block) => {
    // block moves to top when clicked
    block.addEventListener('click', () => {
        orderNum --;
        block.style.order = orderNum;
    })

    // block moves right when mouse pressed down
    block.addEventListener('mousedown', () => {
        setInterval(moveRight, 10);
    })

    block.addEventListener('mouseup', () => {
        block.style.marginLeft = "10px";
    })

})

function moveRight() {
    millisecondsElapsed += 10;
    console.log(millisecondsElapsed);
    block.style.marginLeft = `${millisecondsElapsed/10}px`;
}