console.debug("loaded Jumper for lobste.rs");
var rootComments = Array.from(document.querySelectorAll(".comments > .comments_subtree"))

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
let listener = e => {
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
};
window.addEventListener('keydown', listener, false); //add the keyboard handler

