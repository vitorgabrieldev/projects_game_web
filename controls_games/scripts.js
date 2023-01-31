



// Controls Game Info
const player =  document.querySelector('#player');
const displayGame = document.querySelector('#displayGame');
const fruit = document.querySelector('#fruit');

// Settings Games
let fps = 12;

// Token Key
let recentKey = '';
let tokenLoopRecent = 0;

// ----------------------------------------
    // Info player position
    let x = 0; // max = 96
    let y = 0; // Max = 68
// ----------------------------------------
// ----------------------------------------
    // Info Fruit position
    let xFruit = 0; // max = 98
    let yFruit = 0; // Max = 70
// ----------------------------------------

const controlsPlayer = {
    primaryFunction: function() {
    this.randomFruitLocate();
        // Call gameLoop
        gameLoop();
    },
    randomFruitLocate: function() {
        xFruit = Math.floor(Math.random() * 98);
        yFruit = Math.floor(Math.random() * 70); 
    },
};

// startGameLoop
function gameLoop() {
    setInterval(() => {
        player.style.marginTop = y + '%';
        player.style.marginLeft = x + '%';

        fruit.style.marginTop = yFruit + '%';
        fruit.style.marginLeft = xFruit + '%';
    }, 1000/fps); 
};

// Call function Primary game
controlsPlayer.primaryFunction();

// Controlls Move player
window.addEventListener('keypress', (e) => {
    // Switch controls move Player
    switch(e.key) {
        case 'w':
            if(y > 0) {
                y--;
            } else if(y == 0) {
                y = 68;
            };
            tokenLoopRecent++;
            recentKeyFunction('w');
            break;
        case 'a':
            if(x > 0) {
                x--;
            } else if(x == 0) {
                x = 96;
            };
            tokenLoopRecent++;
            recentKeyFunction('a');
            break;
        case 's':
            if(y < 68) {
                y++;
            } else if(y == 68) {
                y = 0;
            };
            tokenLoopRecent++;
            recentKeyFunction('s');        
            break;
        case 'd':
            if(x < 96) {
                x++;
            } else if(x == 96) {
                x = 0;
            };
            tokenLoopRecent++;
            recentKeyFunction('d');
            break;                
    };
});


// recentKey Function Settings
function recentKeyFunction(keyToken) {
    recentKey = keyToken;
    var recentLoop = setInterval(() => {
        switch(recentKey) {
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
    }, 4000/fps);
    if(tokenLoopRecent >= 2) {
        clearInterval(recentLoop);
        tokenLoopRecent = 0;
    };
    
    // Clear Recent Move
    setTimeout(() => {
        clearInterval(recentLoop);
    }, 2000);
};

// Random Fruit Locate
