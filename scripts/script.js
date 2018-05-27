if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

var cards = document.querySelectorAll(".card");

cards.forEach(function(cardDiv) {

  var card = cardDiv.querySelector(".filling");
  var link = cardDiv.querySelector('.buy p:nth-child(1) a');

  link.addEventListener("click", function(event) {
    event.preventDefault();
    card.classList.remove('default');
    card.classList.add('selected');
  });

  if (card.classList.contains('selected')) {
    card.addEventListener("mouseenter", function() {
      card.classList.add('hover');
    });
    card.addEventListener("mouseleave", function() {
      card.classList.remove('hover');
    });
  }

  card.addEventListener("click", function(event) {
    if (card.classList.contains('default')) {
      card.classList.remove('default');
      card.classList.add('selected');
      card.addEventListener("mouseenter", function() {
        card.classList.add('hover');
      });
      card.addEventListener("mouseleave", function() {
        card.classList.remove('hover');
      });

    } else if (card.classList.contains('selected')) {
      card.classList.remove('selected');
      card.classList.add('disabled');



    } else if (card.classList.contains('disabled')) {
      card.classList.remove('disabled');
      card.classList.add('default');
    }
  });
});
