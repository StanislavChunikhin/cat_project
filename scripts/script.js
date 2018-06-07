if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/*var cards = document.querySelectorAll(".card");

cards.forEach(function(cardDiv) {
  var card = cardDiv.querySelector(".filling");
  var link = cardDiv.querySelector('.buy p:nth-child(1) a');

  var switchStateFunction = function(event) {
    event.preventDefault();
    card.classList.remove('hover');
    if (card.classList.contains('default')) {
      card.classList.remove('default');
      card.classList.add('selected');
    } else if (card.classList.contains('selected')) {
      card.classList.remove('selected');
      card.classList.add('default');
    }
  }

  card.addEventListener("click", switchStateFunction);
  link.addEventListener("click", switchStateFunction);

  card.addEventListener("mouseenter", function() {
    card.classList.add('hover');
  });
  card.addEventListener("mouseleave", function() {
    card.classList.remove('hover');
  });
});*/
