let anchor=document.querySelector(".svgClass").getSVGDocument().getElementById('MiddleCircle');
let rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;
anchor = document.querySelector(".svgClass").getSVGDocument().getElementById('Rectangle');
rekt = anchor.getBoundingClientRect();
console.log(rekt.cy);
const lowX=rekt.left-rekt.width/2;
const rockX=rekt.width/2;
const highX=rekt.left+rekt.width/2;
const middleY=rekt.top;
const highY=rekt.top+rekt.height/2;
const lowY=rekt.top-rekt.height/2;





console.log(lowY+"    "+middleY+"  "+highY+" ------ "+(highY-lowY));


document.addEventListener('mousemove', (e) => {
    //Get mouse cordinates
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    //Get middle circles cordinates

    // calculate the angle between the mouse pointer and the centre circle
    const angles = angle(mouseX, mouseY, anchorX, anchorY);
    //Rotating the chooser
    anchor = document.getElementById('Choser');
    anchor.style.transformOrigin = anchorX + "px " + anchorY + "px";
    anchor.style.transform = "rotate(" + (angles - 150) + "deg)";



})
//Wainting for a click 
document.addEventListener('click', (e) => {
    let anchor = document.getElementById('Choser');
    let rekt = anchor.getBoundingClientRect();
    const choseX = rekt.left + rekt.width / 2;
    const choseY = rekt.top + rekt.height / 2;


    const dis = distance(choseX, choseY, paperXY[0], paperXY[1]);
    console.log(dis);
})

function pointLocation(anchor) {

}
function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}
function distance(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const distance = Math.sqrt(dy * dy + dx * dx);
    return distance;
}