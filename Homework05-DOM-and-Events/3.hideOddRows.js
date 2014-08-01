function removeTr() {

    var trEl = document.querySelectorAll('body table tr');

    for (var i = 0; i < trEl.length; i+=2) {
        trEl[i].style.display = 'none';
    }
}

var button = document.getElementById('btnHideOddRows');
button.addEventListener('click', removeTr, false);