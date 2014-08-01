
function changeButtonText(likeDislikeButton) {

    var likeDislike = document.getElementById('likeDislikeButton');

    if (likeDislike.innerText == 'Like') {
        likeDislike.innerText = 'Dislike';
    } else if (likeDislike.innerText == 'Dislike') {
        likeDislike.innerText = 'Like';
    }
}