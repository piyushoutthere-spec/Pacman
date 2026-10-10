//board
let board;
const rowCount = 21;
const columnCount= 19;
const tileSize= 31;
const boardwidth = columnCount*titleSize;
const boardheight = rowCount*titleSize;
let context;

//imgs
let blueGhostImage;
let OrangeGhostImage;
let pinkGhostImage;
let redGhostImage;
let pacmanUpImage;
let pacmanDownImage;
let pacmanLeftImage;
let pacmanRightImage;
let wallImage;

window.onload = function(){
    board = document.getElementById("board");
    board.height = boardheight;
    board.width= boardwidth;
    context= board.getContext("2d"); // used for drawin in board

    loadImages();
}

// x =wall , P = pacman, ''=food , O=SKIP
// ghots: b = blue , o =orange, p=pink, r=red
const tileMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXrXX X XXXX",
    "O       bpo       O",
    "XXXX X XXXXX X XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X     P     X  X",
    "XX X X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX",
];

const walls = new Set();
const foods = new Set();
const ghosts = new Set();
let pacman;

function loadImages(){
    wallImage = new Image();
    wallImage.src = "imgs/wall.png"

    blueGhostImage= new Image();
    blueGhostImage.src = "imgs/blueGhost.png";
    OrangeGhostImage= new Image();
    OrangeGhostImage.src = "imgs/orangeGhost.png";
    pinkGhostImage = new Image();
    pinkGhostImage.src = "imgs/pinkGhost.png";
    redGhostImage= new Image();
    redGhostImage.src = "imgs/redGhost.png";

    pacmanUpImage= new Image();
    pacmanUpImage.src = "imgs/pacmanUp.png";
    pacmanDownImage = new Image();
    pacmanDownImage.src = "imgs/pacmanDown.png";
    pacmanLeftImage = new Image();
    pacmanLeftImage = "imgs/pacmanLeft.png";
    pacmanRightImage = new Image();
    pacmanRightImage.src = "imgs/pacmanRight.png";
}

function loadMap(){
    walls.clear();
    foods.clear();
    ghosts.clear();

    for (let r=0; r < rowCount; r++){
        for (let c=0; c < columnCount; c++){
            const row = tileMap[r];
            const tileMapChar= row[c];

            const x = c*tileSize;
            const y = r*tileSize;

            if (tileMapChar == 'X'){
                const wall = new Block(wallImage , x, y , tileSize , tileSize);
                walls.add(wall);
            }
            else if (tileMapChar == 'b'){
                const ghost = new Block(blueGhostImage, x , y , tileSize, tileSize);
                ghost.add(ghost);
            }
        }
    }
}

class Block{
    constructor(image ,x, y, width , height){
        this.image = image;
        this.x = x;
        this.y = y;
        this.width= width;
        this.height= height;

        this.startX= x;
        this.startY= y;
    }
}