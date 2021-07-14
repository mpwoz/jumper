console.debug("loaded Jumper for lobste.rs");
const rootComments = Array.from(
    document.querySelectorAll("#inside > .comments > .comments_subtree")
);


const rootCommentsRev = rootComments.slice().reverse();

function scrollToNext() {
    const nextComment = rootComments
        .find(elem => elem.getBoundingClientRect().top > 1);
    if (nextComment) {
        const yDiff = nextComment.getBoundingClientRect().top;
        window.scrollBy(0, yDiff);
    }
}

function scrollToPrevious() {
    const prevComment = rootCommentsRev
        .find(elem => elem.getBoundingClientRect().top < -1);
    if (prevComment) {
        const yDiff = prevComment.getBoundingClientRect().top;
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

