function updateView() {
    let currentPageHtml;
    document.getElementById('app').innerHTML = ''

    if (model.app.currentPage == 'gameStart') {
        currentPageHtml = gameStartView();
        console.log('does mainView run+')
        console.log(currentPageHtml)
    }
    if (model.app.currentPage == 'snake') {
        currentPageHtml = snakeView();
        console.log(currentPageHtml)
    }
    document.getElementById('app').innerHTML = currentPageHtml;
}