const model = {
    app: {
        currentPage: 'gameStart'
    },
    snake: {
        size: 30,
        snakeHead: null,
        nextBodyPart: [],
        growCount: 0,
        direction: { x: 1, y: 0 },
    },
    food: {
    },
    game: {
        speed: 300,
        gameSpeedIncreaseNumber: -50,
        score: 0,
        loop: null,
    }

}

function randomPosition(min, max) {
    return {
        x: Math.floor(Math.random() * (max - min)) + min,
        y: Math.floor(Math.random() * (max - min)) + min
    }
}