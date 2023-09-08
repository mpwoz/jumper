/* Get all the headers on the page */
var comments = Array.from(document.querySelectorAll(".mw-headline"));

var commentsRev = comments.slice().reverse();

function scrollToNext() {
  var nextComment = comments
    .find(elem => elem.getBoundingClientRect().top > 1);
  if (nextComment) {
    var yDiff = nextComment.getBoundingClientRect().top;
    window.scrollBy(0, yDiff);
  }
}

function scrollToPrevious() {
  var prevComment = commentsRev
    .find(elem => elem.getBoundingClientRect().top < -1);
  if (prevComment) {
    var yDiff = prevComment.getBoundingClientRect().top;
    window.scrollBy(0, yDiff);
  }
}

/* Bind arrowkeys to root comment jumping */
window.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 37: // [
      scrollToPrevious();
      break;
    case 39: // ]
      scrollToNext();
      break;
    default:
      console.log("unknown key:", e.keyCode);
      break;
  }
}, false); //add the keyboard handler

