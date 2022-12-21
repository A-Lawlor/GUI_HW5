//Copyright Anthony Lawlor
//Email: Anthony_Lawlor@student.uml.edu

//Global Variables for keeping track of scrabble data
var scrabbleWord = ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'];
var uiArray = [null, null, null, null, null, null, null];
var score = 0;
var highscore = 0;
var totalTiles = 100;
var tilesNeeded = 7;
var tilesUsed = 0;
var fullRow = true;
/*
Array for the scrabble pieces changed the array to make of numbers and added a letter attribute to store the actually value
Source: /~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js 
*/
var scrabbleTiles = [] ;
scrabbleTiles[1] = { "letter" : "A", "value" : 1,  "original-distribution" : 9,  "numberRemaining" : 9, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg"  } ;
scrabbleTiles[2] = { "letter" : "B", "value" : 3,  "original-distribution" : 2,  "numberRemaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_B.jpg"  } ;
scrabbleTiles[3] = { "letter" : "C", "value" : 3,  "original-distribution" : 2,  "numberRemaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_C.jpg"  } ;
scrabbleTiles[4] = { "letter" : "D", "value" : 2,  "original-distribution" : 4,  "numberRemaining" : 4, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_D.jpg"  } ;
scrabbleTiles[5] = { "letter" : "E", "value" : 1,  "original-distribution" : 12, "numberRemaining" : 12, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_E.jpg"  } ;
scrabbleTiles[6] = { "letter" : "F", "value" : 4,  "original-distribution" : 2,  "numberRemaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_F.jpg"  } ;
scrabbleTiles[7] = { "letter" : "G", "value" : 2,  "original-distribution" : 3,  "numberRemaining" : 3, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_G.jpg"  } ;
scrabbleTiles[8] = { "letter" : "H", "value" : 4,  "original-distribution" : 2,  "numberRemaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_H.jpg"  } ;
scrabbleTiles[9] = { "letter" : "I", "value" : 1,  "original-distribution" : 9,  "numberRemaining" : 9, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_I.jpg"  } ;
scrabbleTiles[10] = { "letter" : "J", "value" : 8,  "original-distribution" : 1,  "numberRemaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_J.jpg"  } ;
scrabbleTiles[11] = { "letter" : "K", "value" : 5,  "original-distribution" : 1,  "numberRemaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_K.jpg"  } ;
scrabbleTiles[12] = { "letter" : "L", "value" : 1,  "original-distribution" : 4,  "numberRemaining" : 4, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_L.jpg"  } ;
scrabbleTiles[13] = { "letter" : "M", "value" : 3,  "original-distribution" : 2,  "numberRemaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_M.jpg"  } ;
scrabbleTiles[14] = { "letter" : "N", "value" : 1,  "original-distribution" : 6,  "numberRemaining" : 6, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_N.jpg"  } ;
scrabbleTiles[15] = { "letter" : "O", "value" : 1,  "original-distribution" : 8,  "numberRemaining" : 8, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_O.jpg"  } ;
scrabbleTiles[16] = { "letter" : "P", "value" : 3,  "original-distribution" : 2,  "numberRemaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_P.jpg"  } ;
scrabbleTiles[17] = { "letter" : "Q", "value" : 10, "original-distribution" : 1,  "numberRemaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Q.jpg"  } ;
scrabbleTiles[18] = { "letter" : "R", "value" : 1,  "original-distribution" : 6,  "numberRemaining" : 6, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_R.jpg"  } ;
scrabbleTiles[19] = { "letter" : "S", "value" : 1,  "original-distribution" : 4,  "numberRemaining" : 4, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_S.jpg"  } ;
scrabbleTiles[20] = { "letter" : "T", "value" : 1,  "original-distribution" : 6,  "numberRemaining" : 6, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_T.jpg"  } ;
scrabbleTiles[21] = { "letter" : "U", "value" : 1,  "original-distribution" : 4,  "numberRemaining" : 4, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_U.jpg"  } ;
scrabbleTiles[22] = { "letter" : "V", "value" : 4,  "original-distribution" : 2,  "numberRemaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_V.jpg"  } ;
scrabbleTiles[23] = { "letter" : "W", "value" : 4,  "original-distribution" : 2,  "numberRemaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_W.jpg"  } ;
scrabbleTiles[24] = { "letter" : "X", "value" : 8,  "original-distribution" : 1,  "numberRemaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_X.jpg"  } ;
scrabbleTiles[25] = { "letter" : "Y", "value" : 4,  "original-distribution" : 2,  "numberRemaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Y.jpg"  } ;
scrabbleTiles[26] = { "letter" : "Z", "value" : 10, "original-distribution" : 1,  "numberRemaining" : 1, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Z.jpg"  } ;
scrabbleTiles[27] = { "letter" : "_", "value" : 0,  "original-distribution" : 2,  "numberRemaining" : 2, "image" : "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"  } ;


//Function to handle dropp pieces into the board
$( function() {
  $( "#space1" ).droppable({
    tolerance: 'intersect',
    hoverClass:  "hover",
    drop: function( event, ui ) {
      ui.draggable.detach().appendTo($(this));
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining - 1;
      scrabbleWord[0] = piece.attr("letter");
      displayWord();
      score += piece.attr("value");
      addAndDisplayScore(score)
      console.log(scrabbleWord.join(''));
      uiArray[0] = ui;
    },
    out: function (event, ui) {
      scrabbleWord[0] = '\xa0'
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining + 1;
      $(scrabbleTiles[piece]).attr("numberRemaining", $(scrabbleTiles[piece]).attr("numberRemaining") + 1);
      displayWord();
      score -= piece.attr("value");
      removeAndDisplayScore(score);
      console.log(scrabbleWord.join(''));
      uiArray[0] = null;
    } 
  });

  $( "#space2" ).droppable({
      tolerance: 'intersect',
      hoverClass:  "hover",
      drop: function( event, ui ) {
      ui.draggable.detach().appendTo($(this));
      $( this )
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining - 1;
      $(scrabbleTiles[piece]).attr("numberRemaining", $(scrabbleTiles[piece]).attr("numberRemaining") - 1);
      scrabbleWord[1] = piece.attr("letter");
      displayWord();
      score += piece.attr("value");
      addAndDisplayScore(score);
      uiArray[1] = ui;
    },
    out: function (event, ui) {
      $( this )
      scrabbleWord[1] = '\xa0'
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining + 1;
      $(scrabbleTiles[piece]).attr("numberRemaining", $(scrabbleTiles[piece]).attr("numberRemaining") + 1);
      displayWord();
      score -= piece.attr("value");
      removeAndDisplayScore(score);
      uiArray[1] = null;
    } 
  });

  $( "#space3" ).droppable({
    tolerance: 'intersect',
    drop: function( event, ui ) {
      $( this )
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining - 1;
      $(scrabbleTiles[piece]).attr("numberRemaining", $(scrabbleTiles[piece]).attr("numberRemaining") - 1);
      scrabbleWord[2] = piece.attr("letter");
      displayWord();
      score += piece.attr("value")*2;
      addAndDisplayScore(score)
      ui.draggable.detach().appendTo($(this));
      uiArray[2] = ui;
    },
    out: function (event, ui) {
      $( this )
      scrabbleWord[2] = '\xa0'
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining + 1;
      $(scrabbleTiles[piece]).attr("numberRemaining", $(scrabbleTiles[piece]).attr("numberRemaining") + 1);
      displayWord();
      score -= piece.attr("value")*2;
      removeAndDisplayScore(score);
      uiArray[2] = null;
    } 
  });

  $( "#space4" ).droppable({
    tolerance: 'intersect',
    drop: function( event, ui ) {
      $( this )
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining - 1;
      $(scrabbleTiles[piece]).attr("numberRemaining", $(scrabbleTiles[piece]).attr("numberRemaining") - 1);
      scrabbleWord[3] = piece.attr("letter");
      displayWord();
      score += piece.attr("value");
      addAndDisplayScore(score);
      ui.draggable.detach().appendTo($(this));
      uiArray[3] = ui;
    },
    out: function (event, ui) {
      $( this )
      scrabbleWord[3] = '\xa0'
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining + 1;
      $(scrabbleTiles[piece]).attr("numberRemaining", $(scrabbleTiles[piece]).attr("numberRemaining") + 1);
      displayWord();
      score -= piece.attr("value");
      removeAndDisplayScore(score);
      uiArray[3] = null;
    } 
  });

  $( "#space5" ).droppable({
    tolerance: 'intersect',
    drop: function( event, ui ) {
      $( this )
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining - 1;
      $(scrabbleTiles[piece]).attr("numberRemaining", $(scrabbleTiles[piece]).attr("numberRemaining") - 1);
      scrabbleWord[4] = piece.attr("letter");
      displayWord();
      score += piece.attr("value");
      addAndDisplayScore(score);
      ui.draggable.detach().appendTo($(this));
      uiArray[4] = ui;
    },
    out: function (event, ui) {
      $( this )
      scrabbleWord[4] = '\xa0'
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining + 1;
      $(scrabbleTiles[piece]).attr("numberRemaining", $(scrabbleTiles[piece]).attr("numberRemaining") + 1);
      displayWord();
      score -= piece.attr("value");
      removeAndDisplayScore(score);
      uiArray[4] = null;
    } 
  });

  $( "#space6" ).droppable({
    tolerance: 'intersect',
    drop: function( event, ui ) {
      $( this )
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining - 1;
      $(scrabbleTiles[piece]).attr("numberRemaining", $(scrabbleTiles[piece]).attr("numberRemaining") - 1);
      scrabbleWord[5] = piece.attr("letter");
      displayWord();
      score += piece.attr("value")*2;
      addAndDisplayScore(score);
      ui.draggable.detach().appendTo($(this));
      uiArray[5] = ui;
    },
    out: function (event, ui) {
      $( this )
      scrabbleWord[5] = '\xa0';
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining + 1;
      $(scrabbleTiles[piece]).attr("numberRemaining", $(scrabbleTiles[piece]).attr("numberRemaining") + 1);
      displayWord();
      score -= piece.attr("value")*2;
      removeAndDisplayScore(score)
      uiArray[5] = ui;
    } 
  });

  $( "#space7" ).droppable({
    tolerance: 'intersect',
    drop: function( event, ui ) {
      $( this )
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining - 1;
      $(scrabbleTiles[piece]).attr("numberRemaining", $(scrabbleTiles[piece]).attr("numberRemaining") - 1);
      scrabbleWord[6] = piece.attr("letter");
      displayWord();
      score += piece.attr("value");
      addAndDisplayScore(score);
      ui.draggable.detach().appendTo($(this));
      uiArray[6] = ui;
    },
    out: function (event, ui) {
      $( this )
      scrabbleWord[6] = '\xa0';
      var piece = $(scrabbleTiles[ui.draggable.attr('class').split(' ')[0]]);
      var numbers = ui.draggable.attr('class').split(' ')[0];
      scrabbleTiles[numbers].numberRemaining = scrabbleTiles[numbers].numberRemaining + 1;
      $(scrabbleTiles[piece]).attr("numberRemaining", $(scrabbleTiles[piece]).attr("numberRemaining") + 1);
      displayWord();
      score -= piece.attr("value");
      removeAndDisplayScore(score); 
      uiArray[6] = null;
    } 
  });
});



// $("#scrabblePieces").append("<img id='theImg' src='/graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg'/>");
//$( "#theImg", ).draggable();

function displayWord(){
  $("#word").text("Word: " + (scrabbleWord.join('')) + " ");
}

function displayScore(){
  $("#score").text("Score: " + score);
}

function addAndDisplayScore(score){
    tilesUsed += 1;
    $("#score").text("Score: " + score);
}

function removeAndDisplayScore(score){
    tilesUsed -= 1;
    $("#score").text("Score: " + score);

}
function displayRemainingTiles(){
  $("#rTiles").text("Remaining Tiles: " + (totalTiles -= tilesUsed));
}

//Check if score is greater than highscore and set equal to highscore
function displayHighScore(){
  if(score >= highscore){
    highscore = score;
    $("#hScore").text("High Score:" + highscore);
  }
}

//Add pieces to rack based on how many pieces have already been used in the rack
function generatePieces(){
  if(fullRow){
    tilesNeeded = 7;
  }
  else{
    tilesNeeded = tilesUsed;
  }
  for(var i=1; i<=tilesNeeded; i++){
    var randomLetter = Math.floor((Math.random() * 27) + 1);
    while( $(scrabbleTiles[randomLetter]).attr("numberRemaining") === 0){
        if(totalTiles === 0){
          alert("No More Pieces Available")
          break;
        }
        var randomLetter = Math.floor((Math.random() * 27) + 1);
    }
    //Reduce remaining tiles after submitting a word
    //Source: https://jqueryui.com/position/#default
    $("#scrabblePieces").append("<img class=" + randomLetter + " src='" + $(scrabbleTiles[randomLetter]).attr("image") + "'/>");
    $("." + randomLetter).css({
      'width': '70px',
      'height': '70px'
  });
    $("." + randomLetter).draggable({
      revert: "invalid",
      helper: "clone",
      cursor: "move"
    });
  }
}
$( document ).ready(function() {
  generatePieces();
  fullRow = false;
  displayWord();
  displayRemainingTiles();
});

$( function() {
  $( "#scrabblePieces" ).droppable({
    drop: function( event, ui ) {
      ui.draggable.detach().prependTo($(this));
    }
  });
});





$( "#submit" ).click(function() {
  displayHighScore();
  displayRemainingTiles();
  for(var i = 0; i<7; i++){
    if(uiArray[i] != null){
      uiArray[i].draggable.detach();
    }
  }
  uiArray = [null, null, null, null, null, null, null];
  scrabbleWord = ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'];
  generatePieces();
  tilesUsed = 0;
  displayWord();
  score = 0;
});

//Exchange all the pieces on the board
$( "#exchange" ).click(function() {
  fullRow = true;
  $("#scrabblePieces").empty();
  for(var i = 0; i<7; i++){
    if(uiArray[i] != null){
      uiArray[i].draggable.detach();
    }
  }
  uiArray = [null, null, null, null, null, null, null];
  scrabbleWord = ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'];
  generatePieces();
  fullRow = false;
  tilesUsed = 0;
  displayWord();
  score = 0;
  displayScore();
});

//Restart completely reset all variables in the game
$( "#restart" ).click(function() {
  scrabbleWord = ['\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0', '\xa0'];
  score = 0;
  highscore = 0;
  totalTiles = 100;
  tilesNeeded = 7;
  tilesUsed = 0;
  fullRow = true;
  $("#scrabblePieces").empty();
  for(var i = 0; i<7; i++){
    if(uiArray[i] != null){
      uiArray[i].draggable.detach();
    }
  }
  uiArray = [null, null, null, null, null, null, null];
  generatePieces();
  fullRow = false;
  displayWord();
  displayScore();
  displayHighScore();
  displayRemainingTiles();
});