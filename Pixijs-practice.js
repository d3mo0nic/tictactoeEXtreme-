
/*
1) we will analyse the game
- There is a 3x3 grid of cells so 9 cells in total
- in these cells can be x , o or they can be empty




2) we will create data
- Create x and o players
- create a 2 dimentional array with cells

[
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
]
-winning combinations
Col, Row = (0,0), (1,0), (2,0)
[{row: 0 , col: 0},{row: 1, col: 0 },{row: 2, col: 0 } ]
        Colmuns
[     0 ,  1   , 2
    ["x", "x", "x"], 0
    ["", "", ""],    1   Rows
    ["", "", ""],    2
]
[
    ["x", "", ""],
    ["", "x", ""],
    ["", "", "x"],
]
[
    ["", "", ""],
    ["", "", ""],
    ["x", "x", "x"],
]

3) we will build the logic
- create a grid of empty cells based on the data

*/
const app = new PIXI.Application({
    width: 900,
    height: 600,
    backgroundColor: 0xc2c2c2, // rgb 0, f
    view: document.getElementById('canvas'),
    button: document.getElementById('button')
}); 


const assetsMap = {
    sprites: [
        { name: 'cell-background', url: './Assets/cell.png' },
        { name: 'x-value', url: './Assets/x.png' },
        { name: 'o-value', url: './Assets/o.png' },
        { name: 'explosion', url: './Assets/explosion.png' },
        { name: 'refresh', url: './Assets/refresh.png' },
        { name: 'start', url: './Assets/start.png' },
        { name: 'black', url: './Assets/black.png' },
        { name: 'exit', url: './Assets/exit.png' },
        { name: 'on-switch', url: './Assets/switchon.png' },
        { name: 'off-switch', url: './Assets/switchoff.png' },
        { name: 'settings', url: './Assets/settings.png' },
        { name: 'plus', url: './Assets/plus.png' },
        { name: 'minus', url: './Assets/minus.png' },
        { name: 'credits', url: './Assets/credits.png' },
        { name: 'reset', url: './Assets/reset.png' },
        { name: 'loading', url: './Assets/loading.mp4' },
    ]
}

app.loader.add(assetsMap.sprites); 


const winnerCombinations = [
    [{ row: 0, col: 0} , { row: 0, col: 1}, { row: 0, col: 2}],
	[{ row: 1, col: 0} , { row: 1, col: 1}, { row: 1, col: 2}],
	[{ row: 2, col: 0} , { row: 2, col: 1}, { row: 2, col: 2}],
	[{ row: 0, col: 0} , { row: 1, col: 0}, { row: 2, col: 0}],
	[{ row: 0, col: 1} , { row: 1, col: 1}, { row: 2, col: 1}],
	[{ row: 0, col: 2} , { row: 1, col: 2}, { row: 2, col: 2}],
	[{ row: 0, col: 0} , { row: 1, col: 1}, { row: 2, col: 2}],
	[{ row: 0, col: 2} , { row: 1, col: 1}, { row: 2, col: 0}]

]
    function createGrid(sprites, width, height, cellWidth, cellHeight, onCellClickCb){
        for (let col = 0; col < gridSizeCounter; col++) {
            for (let row = 0; row < gridSizeCounter; row++) {
            
                // create sprite
                const cellTexture = PIXI.Texture.from('cell-background');
                const cellSprite = new PIXI.Sprite(cellTexture);
                cellSprite.width = cellWidth;
                cellSprite.height = cellHeight;
                // set its positions X, Y positions
                // let's calcualte X postion
                const x = cellWidth * col;
            
                // let's calcualte Y postion
                const y = cellHeight * row;
                cellSprite.position.set(x, y);
                // add it to the stage
                app.stage.addChild(cellSprite);

                cellSprite.interactive = true;
                cellSprite.on("click", function cellClick() {
                    onCellClickCb(col, row);
                } );

                sprites[row][col] = cellSprite;
            }
        }
    }
function starttextload() {
    app.stage.removeChildren()
    const startstyle = new PIXI.TextStyle({
        //dropShadow: true,
        dropShadowBlur: 1,
        dropShadowColor: "#bcb8b8",
        fill: [
            "#ff0000",
            "#e15114"
        ],
        fontFamily: "\"Comic Sans MS\", cursive, sans-serif",
        fontSize: 60,
        fontWeight: 900,
        letterSpacing: 6,
        lineJoin: "bevel",
        miterLimit: 100,
        padding: 100,
        stroke: "#050505",
        strokeThickness: 10
    });
    const starttext = new PIXI.Text("Tic tac toe EXTREME", startstyle);
    app.stage.addChild(starttext);
    starttext.position.set(100, 100);
    loadplay()
}
let gridSizestyle = new PIXI.TextStyle({
    //dropShadow: true,
    dropShadowBlur: 1,
    dropShadowColor: "#bcb8b8",
    fill: [
        "#ff0000",
        "#e15114"
    ],
    fontFamily: "\"Comic Sans MS\", cursive, sans-serif",
    fontSize: 60,
    fontWeight: 900,
    letterSpacing: 6,
    lineJoin: "bevel",
    miterLimit: 100,
    padding: 100,
    stroke: "#050505",
    strokeThickness: 10
});
let gridSizeCounter = 10;
function destroy(){
    app.stage.removeChildren()
}
function minusGridCounter(){
    grideSizetext.removeChild()
    gridSizeCounter -= 1;
    console.log(gridSizeCounter + ":0")
}
function addGridCounter(){
    grideSizetext.removeChild()
    gridSizeCounter += 1;
    console.log(gridSizeCounter + ":0")
}
let grideSizetext = new PIXI.Text(gridSizeCounter, gridSizestyle);
function createPlusMinus(){
    exit()
    grideSizetext = new PIXI.Text(gridSizeCounter, gridSizestyle);
    app.stage.addChild(grideSizetext);
    grideSizetext.position.set(450, 150);
    let plusTexture = PIXI.Texture.from('plus');
    let plusSprite = new PIXI.Sprite(plusTexture);
    app.stage.addChild(plusSprite);
    plusSprite.position.set(600, 200);
    plusSprite.height = 160
    plusSprite.width = 140
    plusSprite.anchor.x = 0.5;
    plusSprite.anchor.y = 0.5;
    plusSprite.interactive = true;
    function hoverSizeinc(){
        plusSprite.height = 170
        plusSprite.width = 150
    }
    function hoverSizedec(){
        plusSprite.height = 160
        plusSprite.width = 140
    }
    //plusSprite.pixiSprite.on('mouseover', hoverSize)
    plusSprite.mouseover = function(mouseData) {
        hoverSizeinc()
        console.log("on")
    }
    plusSprite.mouseout = function(mouseData) {
        hoverSizedec()
        console.log("off")
    }
    plusSprite.addListener("click", function() {
        if (gridSizeCounter <= 9){
            addGridCounter()
            app.stage.removeChildren()
            createWinconditions()
            console.log(gridSizeCounter)
        }else{
        app.stage.removeChildren()
        createWinconditions()
        console.log(gridSizeCounter)
        }
    } );
    let minusTexture = PIXI.Texture.from('minus');
    let minusSprite = new PIXI.Sprite(minusTexture);
    app.stage.addChild(minusSprite);
    minusSprite.position.set(350, 200);
    minusSprite.height = 160
    minusSprite.width = 140
    minusSprite.anchor.x = 0.5;
    minusSprite.anchor.y = 0.5;
    minusSprite.interactive = true;
    function hoverSizeincm(){
        minusSprite.height = 170
        minusSprite.width = 150
    }
    function hoverSizedecm(){
        minusSprite.height = 160
        minusSprite.width = 140
    }
    //minusSprite.pixiSprite.on('mouseover', hoverSize)
    minusSprite.mouseover = function(mouseData) {
        hoverSizeincm()
    }
    minusSprite.mouseout = function(mouseData) {
        hoverSizedecm()
    }
    minusSprite.addListener("click", function() {
        if (gridSizeCounter >= 4){
            minusGridCounter()
            app.stage.removeChildren()
            createWinconditions()
            console.log(gridSizeCounter)
        } else {
            app.stage.removeChildren()
            createWinconditions()
            console.log(gridSizeCounter)
        }
    } );
    const gridstyle = new PIXI.TextStyle({
        //dropShadow: true,
        dropShadowBlur: 1,
        dropShadowColor: "#bcb8b8",
        fill: [
            "#ff0000",
            "#e15114"
        ],
        fontFamily: "\"Comic Sans MS\", cursive, sans-serif",
        fontSize: 37,
        fontWeight: 900,
        letterSpacing: 6,
        lineJoin: "bevel",
        miterLimit: 100,
        padding: 100,
        stroke: "#050505",
        strokeThickness: 10
    });
    const gridtext = new PIXI.Text('Grid size', gridstyle);
    app.stage.addChild(gridtext)
    gridtext.position.set(350, 70)
    const desgridstyle = new PIXI.TextStyle({
        //dropShadow: true,
        dropShadowBlur: 1,
        dropShadowColor: "#bcb8b8",
        fill: [
            "#ff0000",
            "#e15114"
        ],
        fontFamily: "\"Comic Sans MS\", cursive, sans-serif",
        fontSize: 20,
        fontWeight: 500,
        letterSpacing: 6,
        lineJoin: "bevel",
        miterLimit: 100,
        padding: 10,
        stroke: "#050505",
        strokeThickness: 1
    });
    const desgridtext = new PIXI.Text('e.g if the number was 6 the grid is a 6x6', desgridstyle);
    app.stage.addChild(desgridtext)
    desgridtext.alpha = 0.7;
    desgridtext.position.set(200, 260)

}
let gridWinstyle = new PIXI.TextStyle({
    //dropShadow: true,
    dropShadowBlur: 1,
    dropShadowColor: "#bcb8b8",
    fill: [
        "#ff0000",
        "#e15114"
    ],
    fontFamily: "\"Comic Sans MS\", cursive, sans-serif",
    fontSize: 60,
    fontWeight: 900,
    letterSpacing: 6,
    lineJoin: "bevel",
    miterLimit: 100,
    padding: 100,
    stroke: "#050505",
    strokeThickness: 10
});
let gridWinCounter = 5;
let gridWintext = new PIXI.Text(gridWinCounter, gridWinstyle);
function minusWinCounter(){
    grideSizetext.removeChild()
    gridWinCounter -= 1;
}
function addWinCounter(){
    grideSizetext.removeChild()
    gridWinCounter += 1;

}
function reset(){
    let resTexture = PIXI.Texture.from('reset');
    let resSprite = new PIXI.Sprite(resTexture);
    app.stage.addChild(resSprite);
    resSprite.position.set(100, 50);
    resSprite.height = 80
    resSprite.width = 200
    resSprite.anchor.x = 0.5;
    resSprite.anchor.y = 0.5;
    resSprite.interactive = true;
    resSprite.addListener("click", function() {
        app.stage.removeChildren()
        gridWinCounter = 5;
        gridSizeCounter = 10;
        createWinconditions()
    })
}
function createWinconditions(){
    createPlusMinus()
    reset()
    //exit()
    gridWintext = new PIXI.Text(gridWinCounter, gridWinstyle);
    app.stage.addChild(gridWintext);
    gridWintext.position.set(450, 350);
    let pluswinTexture = PIXI.Texture.from('plus');
    let pluswinSprite = new PIXI.Sprite(pluswinTexture);
    app.stage.addChild(pluswinSprite);
    pluswinSprite.position.set(600, 400);
    pluswinSprite.height = 160
    pluswinSprite.width = 140
    pluswinSprite.anchor.x = 0.5;
    pluswinSprite.anchor.y = 0.5;
    pluswinSprite.interactive = true;
    function winhoverSizeinc(){
        pluswinSprite.height = 170
        pluswinSprite.width = 150
    }
    function winhoverSizedec(){
        pluswinSprite.height = 160
        pluswinSprite.width = 140
    }
    //plusSprite.pixiSprite.on('mouseover', hoverSize)
    pluswinSprite.mouseover = function(mouseData) {
        winhoverSizeinc()
        console.log("on")
    }
    pluswinSprite.mouseout = function(mouseData) {
       winhoverSizedec()
        console.log("off")
    }
    pluswinSprite.addListener("click", function() {
        if (gridWinCounter <= 9){
            addWinCounter()
            app.stage.removeChildren()
            createWinconditions()
            console.log(gridSizeCounter)
        }else{
        app.stage.removeChildren()
        createWinconditions()
        console.log(gridSizeCounter)
        }
    } );
    let winminusTexture = PIXI.Texture.from('minus');
    let winminusSprite = new PIXI.Sprite(winminusTexture);
    app.stage.addChild(winminusSprite);
    winminusSprite.position.set(350, 400);
    winminusSprite.height = 160
    winminusSprite.width = 140
    winminusSprite.anchor.x = 0.5;
    winminusSprite.anchor.y = 0.5;
    winminusSprite.interactive = true;
    function hoverSizeincm(){
        winminusSprite.height = 170
        winminusSprite.width = 150
    }
    function hoverSizedecm(){
        winminusSprite.height = 160
        winminusSprite.width = 140
    }
    //minusSprite.pixiSprite.on('mouseover', hoverSize)
    winminusSprite.mouseover = function(mouseData) {
        hoverSizeincm()
    }
    winminusSprite.mouseout = function(mouseData) {
        hoverSizedecm()
    }
    winminusSprite.addListener("click", function() {
        if (gridWinCounter >= 4){
            minusWinCounter()
            app.stage.removeChildren()
            createWinconditions()
        } else {
            app.stage.removeChildren()
            createWinconditions()
        }
    } );
    const gridstyle = new PIXI.TextStyle({
        //dropShadow: true,
        dropShadowBlur: 1,
        dropShadowColor: "#bcb8b8",
        fill: [
            "#ff0000",
            "#e15114"
        ],
        fontFamily: "\"Comic Sans MS\", cursive, sans-serif",
        fontSize: 37,
        fontWeight: 900,
        letterSpacing: 6,
        lineJoin: "bevel",
        miterLimit: 100,
        padding: 100,
        stroke: "#050505",
        strokeThickness: 10
    });
    const gridtext = new PIXI.Text('Win Condinitions', gridstyle);
    app.stage.addChild(gridtext)
    gridtext.position.set(300, 280)
    const desgridstyle = new PIXI.TextStyle({
        //dropShadow: true,
        dropShadowBlur: 1,
        dropShadowColor: "#bcb8b8",
        fill: [
            "#ff0000",
            "#e15114"
        ],
        fontFamily: "\"Comic Sans MS\", cursive, sans-serif",
        fontSize: 20,
        fontWeight: 500,
        letterSpacing: 6,
        lineJoin: "bevel",
        miterLimit: 100,
        padding: 10,
        stroke: "#050505",
        strokeThickness: 1
    })
    const desgridtext = new PIXI.Text('e.g if it was was 3 you would need 3 in a row to win', desgridstyle);
    app.stage.addChild(desgridtext)
    desgridtext.alpha = 0.7;
    desgridtext.position.set(70,450)
}
// let on = 'on-switch';
// let off = 'off-switch';
// let currentswitch = off
// function switchcreate(){
//     console.log(currentswitch)
//     console.log(currentswitch)
//     app.stage.removeChildren()
//     exit()
//     let switchTexture = PIXI.Texture.from(currentswitch);
//     let switchSprite = new PIXI.Sprite(switchTexture);
//     app.stage.addChild(switchSprite);
//     switchSprite.position.set(700, 500);
//     switchSprite.anchor.x = 0.5;
//     function angleIncSet(){
//         setSprite.angle += 45
//     }
//     switchSprite.interactive = true;
//     switchSprite.addListener("click", function() {
//         if (currentswitch = off){
//             currentswitch = on
//             console.log(currentswitch)
//         } else if (currentswitch = on){
//             currentswitch = off
//             console.log(currentswitch)
//         }
//         app.stage.removeChildren()
//         exit()
//         switchTexture2 = PIXI.Texture.from(currentswitch);
//         switchSprite2 = new PIXI.Sprite(switchTexture2);
//         app.stage.addChild(switchSprite2);
//         switchSprite2.position.set(650, 500);
//         switchSprite2.interactive = true;
//         switchSprite2.addListener("click", function() {
//              if (currentswitch = on){
//                  currentswitch = off
//                  console.log(currentswitch)
//                  switchcreate()
//             } else if (currentswitch = off){
//                  currentswitch = on
//                  console.log(currentswitch)
//                  switchcreate()
//             }
//             app.stage.removeChildren()
//          })
//     })
// }
function credits(){
    const credstyle = new PIXI.TextStyle({
        //dropShadow: true,
        dropShadowBlur: 1,
        dropShadowColor: "#bcb8b8",
        fill: [
            "#ff0000",
            "#e15114"
        ],
        fontFamily: "\"Comic Sans MS\", cursive, sans-serif",
        fontSize: 37,
        fontWeight: 900,
        letterSpacing: 6,
        lineJoin: "bevel",
        miterLimit: 100,
        padding: 100,
        stroke: "#050505",
        strokeThickness: 10
    });
    const credtext1 = new PIXI.Text('Dominic: coding most of the game', credstyle);
    const credtext2 = new PIXI.Text('Chris: Helping making game live', credstyle);
    const credtext3 = new PIXI.Text('Matty: Helping Coding', credstyle);
    app.stage.addChild(credtext3);
    credtext3.position.set(80, 400);
    app.stage.addChild(credtext1);
    credtext1.position.set(80, 200);
    app.stage.addChild(credtext2);
    credtext2.position.set(80, 300);
}
function loadplay() {
    //increaseSeconds
    const playTexture = PIXI.Texture.from('start');
    const playSprite = new PIXI.Sprite(playTexture);
    app.stage.addChild(playSprite);
    playSprite.position.set(280, 200);
    playSprite.interactive = true;
    playSprite.addListener("click", function() {
        //function makeVisible(){
        //     blackSprite.alpha += .02 
        // }
        // function makeInvisible(){
        //     blackSprite.alpha = 0 
        // }
        function removeChildren(){
            app.stage.removeChildren()
        }
        // const blackTexture = PIXI.Texture.from('black');
        // const blackSprite = new PIXI.Sprite(blackTexture);
        // app.stage.addChild(blackSprite);
        // blackSprite.position.set(0, 0);
        // blackSprite.alpha = 0
        // setInterval(makeVisible, 1)
        // blackSprite.width = 1000
        // blackSprite.height = 1000
        var renderer = PIXI.autoDetectRenderer(800, 600, { transparent: true });
        document.body.appendChild(renderer.view);
        
        // create the root of the scene graph
        var stage = new PIXI.Container();
        
        // create a video texture from a path
        var texture = PIXI.Texture.from('loading');
        
        // create a new Sprite using the video texture (yes it's that easy)
        var videoSprite = new PIXI.Sprite(texture);
        
        videoSprite.width = renderer.width;
        videoSprite.height = renderer.height;
        
        stage.addChild(videoSprite);
        
        animate();
        
        function animate(){
        
            // render the stage
            renderer.render(stage);
        
            requestAnimationFrame(animate);
        }
        
        setTimeout(removeChildren, 499)
        setTimeout(runGame, 500)
        //setTimeout(makeInvisible, 500)
        setTimeout(exit, 500)
    } );
    const setTexture = PIXI.Texture.from('settings');
    const setSprite = new PIXI.Sprite(setTexture);
    app.stage.addChild(setSprite);
    setSprite.position.set(800, 500);
    setSprite.anchor.x = 0.5;
    setSprite.anchor.y = 0.5;
    function angleIncSet(){
        setSprite.angle += 45
    }
    setSprite.interactive = true;
    setSprite.addListener("click", function() {
    setInterval(angleIncSet, 200);
    setTimeout(function(){
    app.stage.removeChildren()
    //switchcreate()
    createWinconditions()
    //createPlusMinus()
    }, 1000)
    })
    const credTexture = PIXI.Texture.from('credits');
    const credSprite = new PIXI.Sprite(credTexture);
    app.stage.addChild(credSprite);
    credSprite.position.set(50, 460);
    credSprite.width = 260
    credSprite.height = 60
    credSprite.interactive = true;
    credSprite.addListener("click", function() {
        app.stage.removeChildren()
        exit()
        credits()
    })
}
function exit(){
    const exitTexture = PIXI.Texture.from('exit');
    const exitSprite = new PIXI.Sprite(exitTexture);
    app.stage.addChild(exitSprite);
    exitSprite.position.set(720, 420);
    exitSprite.interactive = true;
    exitSprite.addListener("click", function() {
        function makeVisible(){
            blackSprite.alpha += .02 
        }
        function makeInvisible(){
            blackSprite.alpha -= .02 
        }
        const blackTexture = PIXI.Texture.from('black');
        const blackSprite = new PIXI.Sprite(blackTexture);
        blackSprite.alpha = 0
        app.stage.addChild(blackSprite);
        blackSprite.position.set(0, 0);
        setInterval(makeVisible, 1)
        blackSprite.width = 1000
        blackSprite.height = 1000
        setTimeout(function(){
            app.stage.removeChildren()
            blackSprite.alpha = 0
            loadplay()
            starttextload()
        }, 500)

    } );
}

function runGame() {
    let currentTime = 0 
    function increaseTimer(){
        currentTime++;
    }
    const Timer = setInterval(increaseTimer, 1000);
    const playerOne = 'x';
    const playerTwo = 'o';
    const gridWidth = 10;
    const gridHeight = 10;
    const cellWidth = 60; // size of an image
    const cellHeight = 60; // size of an image
    const grid = [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
    ];
    const sprites = [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
    ];

    let currentPlayer = playerOne;

    /*
    - the game starts [DONE]
    // Gameplay loop
    - player has x or o value [DONE]
    - whenver onclick happens [DONE]
        if cell is empty [DONE]
            the x or o value gets populated  [HW] in the grid and create a sprite with X or O image and add it to the stage [DONE]

            - if x or o will be filled in 3 in a row then is a win condition [HW]
        else 
            do nothing
    - the turn goes to another player {DONE}
    - repeat steps
    */

    function isGridCellEmpty(col, row){
        const cellValue = grid[row][col]

        if(cellValue === "") {
            return true;
        } else {
            return false;
        }
    }

    function showWin(){
        //  if (currentswitch = on){
        //      console.log(currentswitch)
        //     showSprites()
        // } else if (currentswitch = off){
        //     showSprites()
        //     console.log("off")
        //    console.log(currentTime)
        // }
        //function showSprites() {
            const style = new PIXI.TextStyle({
                //dropShadow: true,
                dropShadowBlur: 1,
                dropShadowColor: "#bcb8b8",
                fill: [
                    "#ff0000",
                    "#e15114"
                ],
                fontFamily: "\"Comic Sans MS\", cursive, sans-serif",
                fontSize: 37,
                fontWeight: 900,
                letterSpacing: 6,
                lineJoin: "bevel",
                miterLimit: 100,
                padding: 100,
                stroke: "#050505",
                strokeThickness: 10
            });
            const text = new PIXI.Text(currentPlayer + ' Has Won!!!', style);
            //let message = currentPlayer + " Has Won!!!"

            sprites.forEach(function(row) {
                row.forEach(function(cellSprite) {
                        cellSprite.removeAllListeners()
                })
            })
            const exTexture = PIXI.Texture.from('explosion');
            const exSprite = new PIXI.Sprite(exTexture);
            app.stage.addChild(exSprite);
            exSprite.position.set(300, 200);
            function increaseSize(){
                exSprite.width += 10;
                exSprite.height += 10;
            }  
            const exSize = setInterval(increaseSize, 1);
            setTimeout(function createText() {    
            setTimeout(function() {
                app.stage.addChild(text)
            }, 500)
            text.position.set(400, 400);
            clearInterval(exSize)  
            }, 100)
            setTimeout(function() {
                app.stage.removeChildren();
                runGame();
                exit()
            }, 2000)
        //} 
    }

    function createCellSprite (col, row, width, height, textureName) {
        
        const xTexture = PIXI.Texture.from(textureName);
        const xSprite = new PIXI.Sprite(xTexture);

        const x = width * col;
        const y = height * row;
        xSprite.position.set(x, y);
        app.stage.addChild(xSprite)
    }

    function populateGridValue(col, row, value) {
        grid[row][col] = value
    }
    function refreshSprite(){
        function angleInc(){
            refSprite.angle += 5
        }
        const refTexture = PIXI.Texture.from('refresh');
        const refSprite = new PIXI.Sprite(refTexture);
        //refSprite.eventMode = 'static';
        // refSprite.cursor = 'pointer';
        //refSprite.on('pointerdown', refreshBoard)
        // console.log("this works")
        refSprite.position.set(750, 300);
        refSprite.anchor.x = 0.5;
        refSprite.anchor.y = 0.5;
        app.stage.addChild(refSprite)
        refSprite.interactive = true;
        refSprite.addListener("click", function() {
            //app.stage.removeChild(refSprite);
            setInterval(angleInc, 10);
            //app.stage.addChild(refSprite);
            setTimeout(refreshBoard, 720)
            setTimeout(function(){
                const exitTexture = PIXI.Texture.from('exit');
                const exitSprite = new PIXI.Sprite(exitTexture);
                app.stage.addChild(exitSprite);
                exitSprite.position.set(720, 420);
                exitSprite.interactive = true;
                exitSprite.addListener("click", function() {
                    app.stage.removeChildren()
                    loadplay()
                    starttextload()
                } );

            }, 721);
        });
    }

    refreshSprite()

    function refreshBoard() {
        app.stage.removeChildren();
        runGame();
    }
    function processUserClick(col, row, exSprite) {
        const currentSymbol = currentPlayer;

    if (isGridCellEmpty(col, row)) {
        const textureName = currentPlayer + '-value';
        createCellSprite(col, row, cellWidth, cellHeight, textureName)
        populateGridValue(col, row, currentPlayer)


    //   for (let i = 0; i < winnerCombinations.length; i++){
    //     const rowWithCombination = winnerCombinations[i];
        //    let counter = 0;
        //   for (let j= 0; j < rowWithCombination.length; j++){
        //       const rowCell = rowWithCombination[j]
        //       const value = grid[rowCell.row][rowCell.col];
        //       if(value === currentPlayer) {
        ///           counter += 1;
        //        }
        // } 
        for (let i = 0; i < 10; i++){
            let xcounter = 0;
            let ocounter = 0;
            for (let j = 0; 10 > j ; j++){
                if (grid[i][j] == "x"){
                    xcounter++;
                    ocounter = 0;
                }
                else if (grid[i][j] == "o"){
                    ocounter++;
                    xcounter = 0;
                }
                else{
                    ocounter = 0;
                    xcounter = 0;
                }
                if(xcounter === gridWinCounter || ocounter === gridWinCounter) {
                    showWin()
                    // return;
                    // think of how we can stop the game for some time and then restart it again [DONE]
                    // read about setTimout [DONE]
                    // read on the internet how to diable PIXI ineractivity [DONE]
                }
            }
        }
        for (let i = 0; i < 10; i++){
            let xcounter = 0;
            let ocounter = 0;
            for (let j = 0; 10 > j ; j++){
                if (grid[j][i] == "x"){
                    xcounter++;
                    ocounter = 0;
                }
                else if (grid[j][i] == "o"){
                    ocounter++;
                    xcounter = 0;
                }
                else{
                    ocounter = 0;
                    xcounter = 0;
                }
                if(xcounter === gridWinCounter || ocounter === gridWinCounter) {
                    showWin()
                }
            }

            // [HW] If there are no win conditions and the grid is full then restart the game because there is a ti
            // [HW] use the grid to check the values. If there is not empty values left ("") then there is not winner
            // [HW] show the message that there is a tie and restart the game}
        }
        for (let i = 0; i < 10; i++){
            for (let j = 0; 10 > j ; j++){
                let xcounter = 0;
                let ocounter = 0;
                for (let k = 0; 10 > k ; k++){
                    if(i + k >= 10){
                        break;
                    }
                    if(j + k >= 10){
                        break;
                    }
                    if (grid[i + k][j + k] == "x"){
                        xcounter++;
                        ocounter = 0;
                    }
                    else if (grid[i + k][j + k] == "o"){
                        ocounter++;
                        xcounter = 0;
                    }
                    else{
                        ocounter = 0;
                        xcounter = 0;
                    }
                    if(xcounter === gridWinCounter || ocounter === gridWinCounter) {
                        showWin()
                    }

                }
                for (let k = 0; 10 > k ; k++){
                    if(i + k >= 10){
                        break;
                    }
                    if(j - k < 0){
                        break;
                    }
                    if (grid[i + k][j - k] == "x"){
                        xcounter++;
                        ocounter = 0;
                    }
                    else if (grid[i + k][j - k] == "o"){
                        ocounter++;
                        xcounter = 0;
                    }
                    else{
                        ocounter = 0;
                        xcounter = 0;
                    }
                    if(xcounter === gridWinCounter || ocounter === gridWinCounter) {
                        showWin()
                    }

                }
                if (grid[i][j] == "x"){
                    xcounter++;
                    ocounter = 0;
                }
                else if (grid[i][j] == "o"){
                    ocounter++;
                    xcounter = 0;
                }
                else{
                    ocounter = 0;
                    xcounter = 0;
                }
                if(xcounter === gridWinCounter || ocounter === gridWinCounter) {
                    showWin()
                }
                
            }
            
        }

    
    





        if(currentPlayer === playerOne) {
            currentPlayer = playerTwo
        } else {
            currentPlayer = playerOne
            }
        }
        
    }

    createGrid(sprites, gridWidth, gridHeight, cellWidth, cellHeight, processUserClick) 
}


app.loader.load(() => {
    starttextload();
});

window.STAGE = app.stage;

//change