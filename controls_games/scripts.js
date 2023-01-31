



// Controls Game Info
const player =  document.querySelector('#player');
const displayGame = document.querySelector('#displayGame');

// Settings Games
let fps = 60;

// ----------------------------------------
    // Info player position
    let x = 0; // max = 96
    let y = 0; // Max = 68
// ----------------------------------------

const controlsPlayer = {
    primaryFunction: function() {
        // Call gameLoop
        gameLoop();
    },
};

// startGameLoop
function gameLoop() {
    setInterval(() => {
        player.style.marginTop = y + '%';
        player.style.marginLeft = x + '%';
    }, fps * 5);
};

// Call function Primary game
controlsPlayer.primaryFunction();

// Controlls Move player
window.addEventListener('keypress', (e) => {
    switch(e.key) {
        case 'w':
            if(y > 0) {
                y--;
            };
            break;
        case 'a':
            if(x > 0) {
                x--;
            };
            break;
        case 's':
            if(y < 68) {
                y++;
            }  ;
            break;
        case 'd':
            if(x < 96) {
                x++;
            };
            break;                
    };
});