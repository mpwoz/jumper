/* Get all the comments on the page */
var comments = Array.from(document.querySelector(".comment-tree")
    .querySelectorAll(".athing"));

/* Filter comments to top-level ones based on indent size */
var rootComments = comments.filter(e => {
  var indentSize = e.querySelector(".ind img").getAttribute("width");
  return indentSize == 0;
});

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

