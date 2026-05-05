const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
ctx.drawImage(
canvas.width = 800;
canvas.height = 600;

function update() {
    // Logic: Move player, check collisions
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw: ctx.fillRect(x, y, width, height)
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
