const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let box = 150;
canvasSize();
draw();
window.addEventListener("resize", () => {canvasSize()})
canvas.addEventListener("mousemove", (event) => {updateDisplay(event), draw(updateDisplay(event)[0], updateDisplay(event)[1])})
canvas.addEventListener("mouseenter", (event) => {updateDisplay(event), draw(updateDisplay(event)[0], updateDisplay(event)[1])})
canvas.addEventListener("mouseleave", (event) => {updateDisplay(event), draw(updateDisplay(event)[0], updateDisplay(event)[1])})
function canvasSize() {
	canvas.width =  window.innerWidth;
	canvas.height = window.innerHeight;
	draw();
}
//draw
function draw(posX, posY) {
	clearCanvas();
	drawSquareA(posX, posY);
	drawSquareB();
};
function drawSquareA(posX, posY) {
	ctx.fillStyle = "red";
	ctx.fillRect(posX - box/2, posY - box/2, box, box);
}
function drawSquareB() {
	ctx.globalAlpha = 0.85;
	ctx.fillStyle = "blue";
	ctx.fillRect(240, 10, box, box);
}
//mouse position
function updateDisplay(event) {
	let posX, posY;
	posX = event.pageX;
	posY = event.pageY;
	return [posX, posY];
}
function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}