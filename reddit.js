/*
Get all the top-level comments on the page

Note: only works on old.reddit.com and no custom subreddit css nonsense.
*/
console.debug("loaded Jumper for reddit");
var rootComments = Array.from(document.querySelectorAll(".commentarea > div > .comment"))

// TODO figure out a more efficient way to reverse search the array
var rootCommentsRev = rootComments.slice().reverse();

function scrollToNext() {
  var nextComment = rootComments
    .find(elem => elem.getBoundingClientRect().top > 1);
  if (nextComment) {
    var yDiff = nextComment.getBoundingClientRect().top;
    window.scrollBy(0, yDiff);
  }
}

function scrollToPrevious() {
  var prevComment = rootCommentsRev
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

