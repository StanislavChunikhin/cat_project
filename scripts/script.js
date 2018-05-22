var card = document.querySelector(".filling");
var body = document.querySelector(".card-body");
var background = document.querySelector(".weight");
var cardhead = document.querySelector(".card-head");
var cardcorner = document.querySelector(".card-corner");
var description1 = document.getElementById("sign");
var link = document.getElementById('buy');

link.addEventListener("click", function(event) {
    event.preventDefault();
    body.classList.add("border-color-selected");
    background.classList.add("background-color-selected");
    cardhead.classList.add("head-border-color-selected");
    cardcorner.classList.add("corner-selected");
    description1.innerHTML="Печень утки разварная с артишоками.";
    card.classList.remove('default');
    card.classList.add('lolo');
});


card.addEventListener("click", function(event) {
  event.preventDefault();
  if (card.classList.contains('default')) {
    body.classList.add("border-color-selected");
    background.classList.add("background-color-selected");
    cardhead.classList.add("head-border-color-selected");
    cardcorner.classList.add("corner-selected");
    description1.innerHTML="Печень утки разварная с артишоками.";
    card.classList.remove('default');
    card.classList.add('lolo');

  } else if (card.classList.contains('lolo')) {
    body.classList.remove("border-color-selected");
    background.classList.remove("background-color-selected");
    cardhead.classList.remove("head-border-color-selected");
    cardcorner.classList.remove("corner-selected");
    description1.innerHTML='Чего сидишь? Порадуй котэ, <a id="buy" href="#">купи</a>';
    card.classList.remove('lolo');
    card.classList.add('default');
  }
});
