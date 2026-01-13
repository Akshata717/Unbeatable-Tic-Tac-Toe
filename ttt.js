/*SPECIFIC MOVE NUMBER 1:
My program will counter ANY opening corner and ANY opening side move by placing a 'O' in square [1][1]
The code for this may be found at line number “323” 
For example, if you put 'X' on [0][0]. The program will counter that move by placing an 'O' on [1][1](the middle)
X # #   X # #
# # # → # O #
# # #   # # #   */


/*SPECIFIC MOVE NUMBER 2:
My program will counter 2 corner moves [0][0] and [2][2] 
by placing an ’O’ in square [1][2]
The code for this may be found at line number “333” 
X # #   X # #
# O # → # O O
# # X   # # X             */



/*SPECIFIC MOVE NUMBER 3:
My program will counter 2 corner moves [0][2] and [2][0] 
by placing an ’O’ in square [1][0]
The code for this may be found at line number “342” 
# # X   # # X
# O # → O O #
X # #   X # #             */
  

  
  
  
/*SPECIFIC MOVE NUMBER 4:
My program will counter any 'X' move to the middle, ([1][1]) by placing 'O' in the corner [0][2]
The code for this may be found at line number “350” 
# # #   # # O
# X # → # X #
# # #   # # #             */



/*SPECIFIC MOVE NUMBER 5:
My program will counter any 'X' move to the middle, ([1][1]), and a move to the corner [2][0] by placing 'O' in the corner [2][2]
The code for this may be found at line number “358” 
# # O   # # O
# X # → # X #
X # #   X # O             */
  



/*SPECIFIC MOVE NUMBER 6:
My program will counter any 'X' move to the corner, ([0][2]) and the side [1][0] by placing 'O' in the corner [0][0]
The code for this may be found at line number “367” 
# # X   O # X
X O # → X O #
# # #   # # #             */

/*SPECIFIC MOVE NUMBER 6.1:
My program will counter any 'X' move to the corner, ([0][0]) and the side [1][2] by placing 'O' in the corner [0][2]
The code for this may be found at line number “375” 
X # #   X # O
# O X → # O X
# # #   # # #             */


/*SPECIFIC MOVE NUMBER 6.2:
My program will counter any 'X' move to the corner, ([2][2]) and the side [1][0] by placing 'O' in the corner [2][0]
The code for this may be found at line number “383” 
# # #   # # #
X O # → X O #
# # X   O # X             */


/*SPECIFIC MOVE NUMBER 6.3:
My program will counter any 'X' move to the corner, ([2][0]) and the side [1][2] by placing 'O' in the corner [2][2]
The code for this may be found at line number “392” 
# # #   # # #
# O X → # O X
X # #   X # O             */

/*SPECIFIC MOVE NUMBER 6.4:
My program will counter any 'X' move to the corner, ([0][0]) and the side [2][1] by placing 'O' in the corner [2][0]
The code for this may be found at line number “383” 
X # #   X # #
# O # → # O #
# X #   O X #        */
           
  
   /*SPECIFIC MOVE NUMBER 6.5:
My program will counter any 'X' move to the corner, ([2][0]) and the side [0][1] by placing 'O' in the corner [0][0]
The code for this may be found at line number “400” 
# X #   O X #
# O # → # O #
X # #   X # #        */
  
  
     /*SPECIFIC MOVE NUMBER 6.6:
My program will counter any 'X' move to the corner, ([0][2]) and the side [2][1] by placing 'O' in the corner [2][2]
The code for this may be found at line number “418” 
# # X   # # X
# O # → # O #
# X #   # X O        */
  
  
  
      /*SPECIFIC MOVE NUMBER 6.7:
My program will counter any 'X' move to the corner, ([2][2]) and the side [0][1] by placing 'O' in the corner [0][2]
The code for this may be found at line number “427” 
# X #   # X O
# O # → # O #
# # X   # # X        */


let playAgainButton;
let gameOver = false;
let canClick = true;
let moveCount = 0;
var decisionArray = [];
for (var i = 0; i < 3; i++) {
  decisionArray[i] = [];
}
var tempArray = [];
for (var i = 0; i < 3; i++) {
  tempArray[i] = [];
}
function setup() {
  
  createCanvas(500, 500);
  background("#CFC1D1");
  strokeWeight(7);
  line(166, 0, 166, 500);
  line(332, 0, 332, 500);
  line(0, 166, 500, 166);
  line(0, 332, 500, 332);
  //reset decisionArray with 0's
  initArray(decisionArray);
  initArray(tempArray);
  console.log(decisionArray[0][0]);
  
  
  
  playAgainButton = createButton("Play Again?");
  playAgainButton.position(175, 430);
  playAgainButton.size(150, 80);
  playAgainButton.style('font-size', '24px');
  playAgainButton.mousePressed(resetGame);
  playAgainButton.hide();

} //setup

function initArray(x) {
  for (let i = 0; i <3; i++) {
    for (let j = 0; j < 3; j++) {
      x[i][j] = "0";
    } //for j
  } //for i
}
function mouseReleased() {
  canClick = true;
}


function outputMove() {
  //1st square
  if(!canClick) return;
  if (
    mouseX > 166 &&
    mouseX < 333 &&
    mouseY > 0 &&
    mouseY < 166 &&
    mouseIsPressed &&
    decisionArray[0][1] == "0"
  ) {
    drawX(2);
    moveCount++;
    decisionArray[0][1] = "X";
    consoleOutput(decisionArray);
  } // if
  else if (
    mouseX > 0 &&
    mouseX < 166 &&
    mouseY > 0 &&
    mouseY < 166 &&
    mouseIsPressed &&
    decisionArray[0][0] == "0"
  ) {
    drawX(1);
    moveCount++;
    decisionArray[0][0] = "X";
    consoleOutput(decisionArray);
  } //if

  //thrid
  else if (
    mouseX > 333 &&
    mouseX < 500 &&
    mouseY > 0 &&
    mouseY < 166 &&
    mouseIsPressed &&
    decisionArray[0][2] == "0"
  ) {
    drawX(3);
    moveCount++;
    decisionArray[0][2] = "X";
    consoleOutput(decisionArray);
  } // something??

  //fourth
  else if (
    mouseX > 0 &&
    mouseX < 166 &&
    mouseY > 166 &&
    mouseY < 333 &&
    mouseIsPressed &&
    decisionArray[1][0] == "0"
  ) {
    drawX(4);
    moveCount++;
    decisionArray[1][0] = "X";
    consoleOutput(decisionArray);
  } // something

  // fifth
  else if (
    mouseX > 166 &&
    mouseX < 333 &&
    mouseY > 166 &&
    mouseY < 333 &&
    mouseIsPressed &&
    decisionArray[1][1] == "0"
  ) {
    drawX(5);
    moveCount++;
    decisionArray[1][1] = "X";
    consoleOutput(decisionArray);
  } // something

  //sixth
  else if (
    mouseX > 333 &&
    mouseX < 500 &&
    mouseY > 166 &&
    mouseY < 333 &&
    mouseIsPressed &&
    decisionArray[1][2] == "0"
  ) {
    drawX(6);
    moveCount++;
    decisionArray[1][2] = "X";
    consoleOutput(decisionArray);
  } // something

  //seventh
  else if (
    mouseX > 0 &&
    mouseX < 166 &&
    mouseY > 333 &&
    mouseY < 500 &&
    mouseIsPressed &&
    decisionArray[2][0] == "0"
  ) {
    drawX(7);
    moveCount++;
    decisionArray[2][0] = "X";
    consoleOutput(decisionArray);
  } // something

  //eighth
  else if (
    mouseX > 166 &&
    mouseX < 333 &&
    mouseY > 333 &&
    mouseY < 500 &&
    mouseIsPressed &&
    decisionArray[2][1] == "0"
  ) {
    drawX(8);
    moveCount++;
    decisionArray[2][1] = "X";
    consoleOutput(decisionArray);
  } // something

  //ninth
  else if (
    mouseX > 333 &&
    mouseX < 500 &&
    mouseY > 333 &&
    mouseY < 500 &&
    mouseIsPressed &&
    decisionArray[2][2] == "0"
  ) {
    drawX(9);
    moveCount++;
    decisionArray[2][2] = "X";
    consoleOutput(decisionArray);
  } // something
}

//as you would think
function consoleOutput(x) {
  for (var i = 0; i < 3; i++) {
    print(i + ": " + x[i][0] + " " + x[i][1] + " " + x[i][2] + " ");
  } //endfor
} //consoleoutput
function drawCircle(n) {
  fill('rgb(64,16,87)')
 
  circle(83 + 166 * ((n - 1) % 3), 83 + 166 * floor(((n - 1) / 3) % 3), 120);
}
function drawX(n) {
  strokeWeight(7)
  let x = 83 + 166 * ((n - 1) % 3);
  let y = 83 + 166 * floor(((n - 1) / 3) % 3);
  line(x - 40, y - 40, x + 40, y + 40);
  line(x - 40, y + 40, x + 40, y - 40);
}
//grid1 =desisionArray
//grid2= tempArray

function computerRandomMove(grid1, grid2) {
  
//SPECIFIC MOVE NUMBER 1  
if (moveCount==1){
 if (grid1[0][0]=='X' || grid1[0][1] == 'X' || grid1[0][2] == 'X'|| grid1[1][0] == 'X'|| grid1[1][2] == 'X'|| grid1[2][0] == 'X'|| grid1[2][1] == 'X'|| grid1[2][2] == 'X'){
   
 grid1[1][1]='O'
 return 5
 }//if
}//if mc==1


//SPECIFIC MOVE NUMBER 2  
if (moveCount == 3){
  if(grid1[0][0] == 'X' && grid1[2][2]=='X'){
    grid1[1][2] = 'O'
    return 6
  }//nested if   
}//moveCount==3
  

//SPECIFIC MOVE NUMBER 3  
if (moveCount == 3){
  if(grid1[0][2] == 'X' && grid1[2][0]=='X'){
    grid1[1][0] = 'O'
    return 4
  }//nested if   
}//moveCount==3
    
//SPECIFIC MOVE NUMBER 4
if (moveCount == 1){
  if(grid1[1][1] == 'X'){
    grid1[0][2] = 'O'
    return 3
  }//nested if   
}
  
//SPECIFIC MOVE NUMBER 5  
if (moveCount == 3){
  if(grid1[1][1] == 'X' && grid1[2][0] == 'X'){
    grid1[2][2] = 'O'
    return 9
  }//nested if   
}
  
  
//SPECIFIC MOVE NUMBER 6  
if (moveCount==3){
  if(grid1[0][2] == 'X' && grid1[1][0]=='X'){
     grid1[0][0]='O'
  return 1
  }
     }
  
//SPECIFIC MOVE NUMBER 6.1
  if (moveCount==3){
  if(grid1[0][0] == 'X' && grid1[1][2]=='X'){
     grid1[1][1]='O'
  return 3
  }
     }

//SPECIFIC MOVE NUMBER 6.2
    if (moveCount==3){
  if(grid1[2][2] == 'X' && grid1[1][0]=='X'){
     grid1[2][0]='O'
  return 7
  }
     }
  
  
 //SPECIFIC MOVE NUMBER 6.3   
    if (moveCount==3){
  if(grid1[2][0] == 'X' && grid1[1][2]=='X'){
     grid1[2][2]='O'
  return 9
  }
    }
  
  //SPECIFIC MOVE NUMBER 6.4   
    if (moveCount==3){
  if(grid1[0][0] == 'X' && grid1[2][1]=='X'){
     grid1[2][0]='O'
  return 7
  }
    }
        
  
 //SPECIFIC MOVE NUMBER 6.5   
    if (moveCount==3){
  if(grid1[0][1] == 'X' && grid1[2][0]=='X'){
     grid1[0][0]='O'
  return 1
  }
    }
  
  
  //SPECIFIC MOVE NUMBER 6.6   
    if (moveCount==3){
  if(grid1[0][2] == 'X' && grid1[2][1]=='X'){
     grid1[2][2]='O'
  return 9
  }
    }
  
    
  //SPECIFIC MOVE NUMBER 6.7   
    if (moveCount==3){
  if(grid1[0][1] == 'X' && grid1[2][2]=='X'){
     grid1[1][2]='O'
  return 3
  }
    }
  

  let row;
  let col;
  let squareNumber;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      grid2[i][j] = grid1[i][j];
    } //j
  } //i
  for (let k = 1; k <= 9; k++) {
    row = floor((k - 1) / 3);
    col = (k - 1) % 3;

    if (grid2[row][col] == "0") {
      grid2[row][col] = "O";
      if (winConfirmed(grid2)) {
        grid1[row][col] = "O";
        return k;
      } //if
      else {
        grid2[row][col] = "0";
      }
    } //if
  } //k*/
  

  
for (let k = 1; k <= 9; k++) {
    row = floor((k - 1) / 3);
    col = (k - 1) % 3;

    if (grid2[row][col] == '0') {
      grid2[row][col] = 'X';
      if (winConfirmed(grid2)) { 
        grid1[row][col]='O';
        return k;
      } //if
       grid2[row][col] = '0'; 
    } //if
}//for

  
  let looking = true;
  while (looking) {
    squareNumber = round(random(1, 9));
    row = floor((squareNumber - 1) / 3);
    col = (squareNumber - 1) % 3;

    if (grid1[row][col] == "0") {
      looking = false;
    } //if
  } //while

  grid1[row][col] = "O";
  return squareNumber;
  
  
//final strategy options
  
 
  

  
}//function

 


  

function winConfirmed(n) {
  if (
    (n[0][0] == n[0][1] && n[0][0] == n[0][2] && n[0][0] != "0") ||
    (n[1][0] == n[1][1] && n[1][0] == n[1][2] && n[1][0] != "0") ||
    (n[2][0] == n[2][1] && n[2][0] == n[2][2] && n[2][0] != "0") ||
    (n[0][0] == n[1][0] && n[0][0] == n[2][0] && n[0][0] != "0") ||
    (n[0][1] == n[1][1] && n[0][1] == n[2][1] && n[0][1] != "0") ||
    (n[0][2] == n[1][2] && n[0][2] == n[2][2] && n[0][2] != "0") ||
    (n[0][0] == n[1][1] && n[0][0] == n[2][2] && n[0][0] != "0") ||
    (n[0][2] == n[1][1] && n[0][2] == n[2][0] && n[0][2] != "0")
  ) {
    return true;
  } else {
    return false;
  }
} //win confirmed

function checkWin(n) {
  //first row
  if (winConfirmed(n)) {
    
    if (moveCount % 2 == 1) {
      clear();
      background("rgb(138,149,206)");
      textSize(100);
      textAlign(CENTER);
      text("You Won!", 250, 250);
      gameOver = true;
      playAgainButton.show();
      noLoop();

    } //move
    else {
      clear();
      background("rgb(128,132,136)");
      textSize(100);
      textAlign(CENTER);
      text("You Lost", 250, 250);
      gameOver = true;
    playAgainButton.show();
    noLoop();

    } //else
  } // big if

  if (moveCount == 9) {
    clear();
    background("rgb(184,160,194)");
    textSize(150);
    textAlign(CENTER);
    text("Tie!", 250, 250);
    gameOver = true;
    playAgainButton.show();
    noLoop();
  } //if
} //cw



function resetGame() {
  moveCount = 0;
  gameOver = false;
  canClick = false; 

  clear();
  background("#CFC1D1");
  line(166, 0, 166, 500);
  line(332, 0, 332, 500);
  line(0, 166, 500, 166);
  line(0, 332, 500, 332);
  //reset decisionArray with 0's
  initArray(decisionArray);
  initArray(tempArray);
  console.log(decisionArray[0][0]);

  playAgainButton.hide();
  loop();
}// reset game




function draw() {
  

  if (moveCount % 2 == 0) {
    outputMove();
  } //if
  else {
    let move =computerRandomMove(decisionArray, tempArray)
    drawCircle(move);
    moveCount++;
    consoleOutput(decisionArray);

  
  } //else
  checkWin(decisionArray);
} //draw





