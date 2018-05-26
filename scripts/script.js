
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

var cards = document.querySelectorAll(".card");

cards.forEach(function(cardDiv){

var card = cardDiv.querySelector(".filling");
var body = cardDiv.querySelector(".card-body");
var background = cardDiv.querySelector(".weight");
var cardhead = cardDiv.querySelector(".card-head");
var cardcorner = cardDiv.querySelector(".card-corner");
var link = cardDiv.querySelector('.buy p:nth-child(1) a');
var paragraph1 = cardDiv.querySelector('.buy p:nth-child(1)');
var paragraph2 = cardDiv.querySelector('.buy p:nth-child(2)');
var paragraph3 = cardDiv.querySelector('.buy p:nth-child(3)');
var headsign1 = cardDiv.querySelector('.card-head p:nth-child(1)');
var headsign2 = cardDiv.querySelector('.card-head p:nth-child(2)');


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
    if (card.classList.contains('default')) {
    body.classList.add("border-color-selected");
    background.classList.add("background-weight-color-selected");
    cardhead.classList.add("head-border-color-selected");
    cardcorner.classList.add("corner-selected");
    paragraph1.classList.remove("display");
    paragraph2.classList.add("display");
    card.classList.remove('default');
    card.classList.add('selected');

    card.addEventListener("mouseenter", function() {
         body.classList.add('border-color-selected-hover');
         background.classList.add('background-weight-color-selected-hover');
         cardhead.classList.add('head-border-color-selected-hover');
         cardcorner.classList.add('corner-selected-hover');
         headsign1.classList.remove('display');
         headsign2.classList.add('display');
         });
     card.addEventListener("mouseleave", function(){
       body.classList.remove('border-color-selected-hover');
       background.classList.remove('background-weight-color-selected-hover');
       cardhead.classList.remove('head-border-color-selected-hover');
       cardcorner.classList.remove('corner-selected-hover');
       headsign1.classList.add('display');
       headsign2.classList.remove('display');
     });

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

});
