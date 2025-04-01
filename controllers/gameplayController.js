function initGame() {
    model.app.currentPage = 'snake';

    model.snake = {
        size: 30,
        snakeHead: null,
        nextBodyPart: [],
        growCount: 0,
        direction: { x: 1, y: 0 },
    }
    model.game = {
        speed: 300,
        gameSpeedIncreaseNumber: -50,
        score: 0,
        loop: null,
    }
    model.snake.snakeHead = randomPosition(3, model.snake.size - 3)
    model.snake.nextBodyPart.push(
        {
            x: model.snake.snakeHead.x - 1,
            y: model.snake.snakeHead.y
        },
        {
            x: model.snake.snakeHead.x - 2,
            y: model.snake.snakeHead.y
        }
    ),


        model.food = randomPosition(0, 30);
    snakeView();
    gameLoop();
}

function gameLoop() {
    model.game.loop = setInterval(() => {
        const isGameOver = checkIfGameOver()
        if (isGameOver) {
            return;
        } else {
            snakeEatsFood();
            moveSnake();
        }
    }, model.game.speed);
}
function checkIfGameOver() {
    const snake = model.snake.snakeHead
    let gameOver;

    if (snake.x > 29) gameOver = true;
    if (snake.x < 0) gameOver = true;
    if (snake.y > 29) gameOver = true;
    if (snake.y < 0) gameOver = true;
    model.snake.nextBodyPart.forEach(part => {
        if (snake.x == part.x && snake.y == part.y) {
            gameOver = true;
        }
    });

    if (gameOver) {
        clearInterval(model.game.loop);
        alert(`Game Over <br> You got a score of ${model.game.score}`)
        setPage('gameStart');
        return true;
    }

    return false;
}

function userKeyInput(e) {
    if (e.keyCode == 87 && model.snake.direction.y != 1) { // up
        model.snake.direction = { x: 0, y: -1 };
    } else if (e.keyCode == 83 && model.snake.direction.y != -1) { // down
        model.snake.direction = { x: 0, y: 1 };
    } else if (e.keyCode == 65 && model.snake.direction.x != 1) { // left
        model.snake.direction = { x: -1, y: 0 };
    } else if (e.keyCode == 68 && model.snake.direction.x != -1) { // right
        model.snake.direction = { x: 1, y: 0 };
    }
}

function gameSpeedIncrease() {
    if (model.game.gameSpeedIncreaseNumber < 0) {
        model.game.speed += model.game.gameSpeedIncreaseNumber;
        model.game.gameSpeedIncreaseNumber += 5.65;
    }

    clearInterval(model.game.loop);
    gameLoop();
}