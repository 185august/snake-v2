function updateView() {
    let currentPageHtml;
    document.getElementById('app').innerHTML = ''

    if (model.app.currentPage == 'gameStart') {
        currentPageHtml = gameStartView();
    }
    if (model.app.currentPage == 'snake') {
        currentPageHtml = initGame();
    }
    document.getElementById('app').innerHTML = currentPageHtml ?? '';
}