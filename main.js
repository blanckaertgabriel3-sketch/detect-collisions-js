const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let box = 50;
let squareA = {
	color: "red",
	posX: 10,
	posY: 10,
	width: box,
	height: box,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
}
let squareB = {
	color: "blue",
	posX: 240,
	posY: 100,
	width: box,
	height: box,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
}
squareB.top = squareB.posY;
squareB.bottom = squareB.posY + box;
squareB.left = squareB.posX;
squareB.right = squareB.posX + box;
canvasSize();
draw();
window.addEventListener("resize", () => {canvasSize()})
canvas.addEventListener("mousemove", (event) => {updateDisplay(event), draw(), collision()})
function canvasSize() {
	canvas.width =  window.innerWidth;
	canvas.height = window.innerHeight;
	draw();
}
//draw
function draw() {
	ctx.globalAlpha = 0.85;
	clearCanvas();
	drawSquareA();
	drawSquareB();
};
function drawSquareA() {
	ctx.fillStyle = squareA.color;
	ctx.fillRect(squareA.posX, squareA.posY, squareA.width, squareA.height);
}
function drawSquareB() {
	ctx.fillStyle = squareB.color;
	ctx.fillRect(squareB.posX, squareB.posY, squareB.width, squareB.height);
}
//mouse position
function updateDisplay(event) {
	squareA.posX = event.pageX - box/2;
	squareA.posY = event.pageY - box/2;

	squareA.top = squareA.posY;
	squareA.bottom = squareA.posY + box;
	squareA.left = squareA.posX;
	squareA.right = squareA.posX + box;
}
function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function collision() {
	if(squareA.right > squareB.left && squareA.right < squareB.right + box && squareA.bottom > squareB.top && squareA.top < squareB.bottom) {
		console.log("collision");
	}
}