const canvas = document.getElementById('gameCanvas');
const canvas = { width: 800, height: 600 };
const level = { width: 2000, height: 600 }; 

const camera = {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height
};

function updateCamera(player) {
    let targetX = player.x - camera.width / 2;
    let targetY = player.y - camera.height / 2;
    camera.x = Math.max(0, Math.min(targetX, level.width - camera.width));
    camera.x = Math.max(0, Math.min(targetY, level.height - camera.height));
}
function draw(ctx, player, gameObjects) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(-camera.x, -camera.y);
    drawPlayer(player); 
    gameObjects.forEach(obj => drawObject(obj));

    ctx.restore();
}
