var card = document.querySelector(".filling");
var body = document.querySelector(".card-body");
var background = document.querySelector(".weight");
var cardhead = document.querySelector(".card-head");
var cardcorner = document.querySelector(".card-corner");
var link = document.querySelector('.buy p:nth-child(1) a');
var paragraph1 = document.querySelector('.buy p:nth-child(1)');
var paragraph2 = document.querySelector('.buy p:nth-child(2)');
var paragraph3 = document.querySelector('.buy p:nth-child(3)');

link.addEventListener("click", function(event) {
  event.preventDefault();
  body.classList.add("border-color-selected");
  background.classList.add("background-weight-color-selected");
  cardhead.classList.add("head-border-color-selected");
  cardcorner.classList.add("corner-selected");
  paragraph1.classList.remove("display");
  paragraph2.classList.add("display");
  card.classList.remove('default');
  card.classList.add('selected');
});


card.addEventListener("click", function(event) {
  event.preventDefault();
  if (card.classList.contains('default')) {
    body.classList.add("border-color-selected");
    background.classList.add("background-weight-color-selected");
    cardhead.classList.add("head-border-color-selected");
    cardcorner.classList.add("corner-selected");
    paragraph1.classList.remove("display");
    paragraph2.classList.add("display");
    card.classList.remove('default');
    card.classList.add('selected');

  } else if (card.classList.contains('selected')) {
    body.classList.remove("border-color-selected");
    body.classList.add("card-body-disabled");
    background.classList.remove("background-weight-color-selected");
    background.classList.add("background-weight-color-disabled");
    cardhead.classList.remove("head-border-color-selected");
    cardhead.classList.add("color-disabled");
    cardcorner.classList.remove("corner-selected");
    cardcorner.classList.add("corner-disabled");
    paragraph2.classList.remove("display");
    paragraph3.classList.add("display");
    card.classList.remove('selected');
    card.classList.add('disabled');

  } else if (card.classList.contains('disabled')) {
    body.classList.remove("card-body-disabled");
    background.classList.remove("background-weight-color-disabled");
    cardhead.classList.remove("color-disabled");
    cardcorner.classList.remove("corner-disabled");
    paragraph1.classList.add("display");
    paragraph3.classList.remove("display");
    card.classList.remove('disabled');
    card.classList.add('default');
  }
});
