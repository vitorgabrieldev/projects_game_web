



// Controls Game Info
const player =  document.querySelector('#player');
const displayGame = document.querySelector('#displayGame');

// Settings Games
let fps = 12;

// Token Key
let recentKey = '';
let tokenLoopRecent = 0;

// Tokens Fruits
let qtdFruitGame = 0;
let qtdMaxFruit = 10;
let keyFruit = 0;

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
        // Random Fruit Locate

        for(qtdMaxFruit; qtdFruitGame < qtdMaxFruit; qtdFruitGame++) {
            $("#displayGame").append (`
                <div title="Fruit Game" class="fruitGame_content" id="fruit${keyFruit}">
                    <i class='bx bxl-apple'></i>
                </div>
            `);

            xFruit = Math.floor(Math.random() * 98);
            yFruit = Math.floor(Math.random() * 70);

            // ------------- Fruit ------------------
            document.querySelector(`#fruit${keyFruit}`).style.marginTop = yFruit + '%';
            document.querySelector(`#fruit${keyFruit}`).style.marginLeft = xFruit + '%';
        
            keyFruit++;
        };
    },
};

// startGameLoop
function gameLoop() {
    setInterval(() => {
        // ------------- Player -----------------
        player.style.marginTop = y + '%';
        player.style.marginLeft = x + '%';
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
            // recentKeyFunction('w');
            break;
        case 'a':
            if(x > 0) {
                x--;
            } else if(x == 0) {
                x = 96;
            };
            // recentKeyFunction('a');
            break;
        case 's':
            if(y < 68) {
                y++;
            } else if(y == 68) {
                y = 0;
            };
            // recentKeyFunction('s');        
            break;
        case 'd':
            if(x < 96) {
                x++;
            } else if(x == 96) {
                x = 0;
            };
            // recentKeyFunction('d');
            break;                
    };
});


// recentKey Function Settings
// function recentKeyFunction(keyToken) {
//     recentKey = keyToken;
//     var recentLoop = setInterval(() => {
//         switch(recentKey) {
//             case 'w':
//                 tokenLoopRecent++;
//                 if(y > 0) {
//                     y--;
//                 };
//             break;
//             case 'a':
//                 tokenLoopRecent++;
//                 if(x > 0) {
//                     x--;
//                 };
//                 break;
//             case 's':
//                 tokenLoopRecent++;
//                 if(y < 68) {
//                     y++;
//                 }  ;
//                 break;
//             case 'd':
//                 tokenLoopRecent++;
//                 if(x < 96) {
//                     x++;
//                 };
//                 break; 
//         };
//     }, 4000/fps);
//     if(tokenLoopRecent >= 5) {
//         console.log(tokenLoopRecent)
//         clearInterval(recentLoop);
//         tokenLoopRecent = 0;
//     };

//     // Clear Recent Move
// };