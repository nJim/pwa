const cardsNum = document.querySelectorAll('.slot').length;
const board = document.getElementById('board');
const btnRematch = document.getElementById('btn-rematch');

const getRand = limit => Math.round(Math.random() * limit);
const cardAssigned = document.getElementById('card-assigned');
cardAssigned.className = 'card card--assigned card-' + getRand(cardsNum);

const loadCards = () => {
  var people = ['webchefs1', 'webchefs2', 'webchefs3'];
  var i = Math.floor(Math.random() * people.length);
  var uri = 'assets/' + people[i] + '.webp';
  var styleElement = document.createElement('style');
  var styleText = `.card__front::after { background-image: url(${uri}); }`;
  styleElement.appendChild(document.createTextNode(styleText));
  document.head.appendChild(styleElement);
}
loadCards();

btnRematch.onclick = () => {
  cardAssigned.className = 'card card--assigned card-' + getRand(cardsNum);
  loadCards();
};
