function increaseSnakeSize() {
    const part = model.snake.nextBodyPart;
    part.push({
        x: part[part.length - 1].x + model.snake.direction.x,
        y: part[part.length - 1].y + model.snake.direction.y
    });
}



function snakeEatsFood() {
    if (model.snake.snakeHead.x == model.food.x && model.snake.snakeHead.y == model.food.y) {
        model.food = randomPosition(0, 30);
        increaseSnakeSize();
        gameSpeedIncrease();
    }
}

function moveSnake() {
    if (model.snake.direction == null) return;
    let oldHeadPos = { x: model.snake.snakeHead.x, y: model.snake.snakeHead.y }
    model.snake.snakeHead.x += model.snake.direction.x;
    model.snake.snakeHead.y += model.snake.direction.y;

    for (let i = 0; i < model.snake.nextBodyPart.length; i++) {
        const temp = {
            x: model.snake.nextBodyPart[i].x,
            y: model.snake.nextBodyPart[i].y
        };
        model.snake.nextBodyPart[i].x = oldHeadPos.x;
        model.snake.nextBodyPart[i].y = oldHeadPos.y;

        oldHeadPos = temp;
    }

    snakeView();
}

