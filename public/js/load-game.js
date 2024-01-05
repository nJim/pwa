const urlSearchParams = new URLSearchParams(window.location.search);
const game = urlSearchParams.get('game');

var gameBoard = document.getElementById('game')
gameBoard.onclick = function(e){
  gameBoard.focus();
}
gameBoard.addEventListener('keydown', function(e){
  e.preventDefault();
  return false;
})

var head = document.getElementsByTagName('head')[0];
var js = document.createElement("script");
js.type = "text/javascript";
if ('pong' == game) {
  js.src = "js/game-pong.js";
  gameBoard.setAttribute('height', '526');
}
else if ('missile-command' == game) {
  js.src = "js/game-missile-command.js";
  gameBoard.setAttribute('height', '464');
}
else if ('bomberman' == game) {
  js.src = "js/game-bomberman.js";
  gameBoard.setAttribute('height', '585');
  gameBoard.style.backgroundColor = 'forestgreen';
}
else if ('snake' == game) {
  js.src = "js/game-snake.js";
  gameBoard.setAttribute('height', '675');
}
else if ('tetris' == game) {
  js.src = "js/game-tetris.js";
  gameBoard.setAttribute('width', '320');
  gameBoard.setAttribute('height', '640');
}
else {
  js.src = "js/game-frogger.js";
  gameBoard.setAttribute('height', '725');
}
head.appendChild(js);
