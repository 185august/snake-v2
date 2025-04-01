function snakeView() {
    const snakeTable = document.getElementById('app')
    snakeTable.innerHTML = ''

    for (let i = 0; i < model.snake.size; i++) {
        let tr = snakeTable.insertRow();
        for (let j = 0; j < model.snake.size; j++) {
            tr.insertCell();
        }
    }

    if (model.snake.snakeHead.y > 29 || model.snake.snakeHead.y < 0
        || model.snake.snakeHead.x > 29 || model.snake.snakeHead.x < 0) return;

    const snake = snakeTable.rows[model.snake.snakeHead.y].cells[model.snake.snakeHead.x];
    snake.classList.add('snake');

    for (const part of model.snake.nextBodyPart) {
        const x = snakeTable.rows[part.y].cells[part.x]
        x.classList.add('snake');
    }

    const food = snakeTable.rows[model.food.y].cells[model.food.x];
    food.classList.add('food');

    return snakeTable
}



