/** initialising constants that i will use trought the game
 * 
 */
// middle circle that is used for determening the mouse angle
// it will work with inline svg and let anchor=document.getelementbyid('MiddleCircle')
let anchor=document.getElementById('svgClass');

let rekt=anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;
console.log(anchorX+" "+anchorY);
// Rectangle is used for possitioning rock paper scissors icons. Two of them are at the upper corners of the rectangle, while the third is possitioned on the middle of the bottom line 

rekt = anchor.getBoundingClientRect();
console.log(rekt.cy);
const lowX=rekt.left-rekt.width/2;
const rockX=rekt.width/2;
const highX=rekt.left+rekt.width/2;
const middleY=rekt.top;
const highY=rekt.top+rekt.height/2;
const lowY=rekt.top-rekt.height/2;




/** used for checking if i got the correct values
console.log(lowY+"    "+middleY+"  "+highY+" ------ "+(highY-lowY));
*/

document.addEventListener('mousemove', (e) => {
    //Get mouse cordinates
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    //Get middle circles cordinates

    // calculate the angle between the mouse pointer and the centre circle
    const angles = angle(mouseX, mouseY, anchorX, anchorY);
    //Rotating the chooser
    anchor = document.getElementById('ChooserClean');
    anchor.style.transformOrigin = anchorX + "px " + anchorY + "px";
    anchor.style.transform = "rotate(" + (angles - 150) + "deg)";



})
//Wainting for a click 
document.addEventListener('click', (e) => {
    let anchor = document.getElementById('ChooserClean');
    let rekt = anchor.getBoundingClientRect();
    const choseX = rekt.left + rekt.width / 2;
    const choseY = rekt.top + rekt.height / 2;


    const dis = distance(choseX, choseY, paperXY[0], paperXY[1]);
    console.log(dis);
})
//function used for determening the angle of the mouse cursor relative to the middle circle
function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}
// will be used for calculating the differance between Rectangle points and the middle point of ChooserClear
function distance(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const distance = Math.sqrt(dy * dy + dx * dx);
    return distance;
}