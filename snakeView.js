function snakeView() {
    const snakeTable = document.getElementById('app')
    snakeTable.innerHTML = ''

    for (let i = 0; i < model.snake.size; i++) {
        let tr = snakeTable.insertRow();
        for (let j = 0; j < model.snake.size; j++) {
            tr.insertCell();
        }
    }
    const snake = snakeTable.rows[model.snake.snakeHead.y].cells[model.snake.snakeHead.x];
    if (snake == undefined) return;
    snake.classList.add('snake');
    for (const part of model.snake.nextBodyPart) {
        const x = snakeTable.rows[part.y].cells[part.x]
        x.classList.add('snake');
    }
    const food = snakeTable.rows[model.food.y].cells[model.food.x];
    food.classList.add('food');

    return snakeTable
}



