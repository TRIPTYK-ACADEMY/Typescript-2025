import readline from "readline";

enum CellType {
    EMPTY = ".",
    SNAKE = "🟩",
    FOOD = "F"
}

enum Direction {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

interface Position {
    x: number;
    y: number;
}

class Board {
    private size = 10;
    private snake: Position[] = [{ x: 5, y: 5 }];
    private food: Position;
    private direction: Direction = Direction.RIGHT;
    private gameOver = false;

    constructor() {
        this.food = this.generateFood();
    }

    private generateFood(): Position {
        let pos: Position;
        do {
            pos = {
                x: Math.floor(Math.random() * this.size),
                y: Math.floor(Math.random() * this.size)
            };
        } while (this.isSnakeAt(pos));
        return pos;
    }

    private isSnakeAt(pos: Position): boolean {
        return this.snake.some(s => s.x === pos.x && s.y === pos.y);
    }

    setDirection(dir: Direction) {
        // Empêcher de faire demi-tour
        const opposite = {
            [Direction.UP]: Direction.DOWN,
            [Direction.DOWN]: Direction.UP,
            [Direction.LEFT]: Direction.RIGHT,
            [Direction.RIGHT]: Direction.LEFT
        };
        
        if (this.direction !== opposite[dir]) {
            this.direction = dir;
        }
    }

    tick(): boolean {
        const head = this.snake[0];
        let newHead: Position;

        switch (this.direction) {
            case Direction.UP:
                newHead = { x: head.x, y: head.y - 1 };
                break;
            case Direction.DOWN:
                newHead = { x: head.x, y: head.y + 1 };
                break;
            case Direction.LEFT:
                newHead = { x: head.x - 1, y: head.y };
                break;
            case Direction.RIGHT:
                newHead = { x: head.x + 1, y: head.y };
                break;
        }

        // Vérifier collision avec murs ou soi-même
        if (newHead.x < 0 || newHead.x >= this.size || 
                newHead.y < 0 || newHead.y >= this.size || 
                this.isSnakeAt(newHead)) {
            this.gameOver = true;
            return false;
        }

        this.snake.unshift(newHead);

        // Vérifier si mange la nourriture
        if (newHead.x === this.food.x && newHead.y === this.food.y) {
            this.food = this.generateFood();
        } else {
            this.snake.pop();
        }

        return true;
    }

    display() {
        console.clear();
        for (let y = 0; y < this.size; y++) {
            let row = "";
            for (let x = 0; x < this.size; x++) {
                const pos = { x, y };
                if (this.isSnakeAt(pos)) {
                    row += CellType.SNAKE + " ";
                } else if (pos.x === this.food.x && pos.y === this.food.y) {
                    row += CellType.FOOD + " ";
                } else {
                    row += CellType.EMPTY + " ";
                }
            }
            console.log(row);
        }
        console.log(`Score: ${this.snake.length - 1}`);
        if (this.gameOver) {
            console.log("GAME OVER!");
        }
    }

    isGameOver(): boolean {
        return this.gameOver;
    }
}

// Configuration du terminal pour capturer les touches
readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}

const game = new Board();
game.display();

// Écouter les touches du clavier
process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit();
    }

    switch (key.name) {
        case 'up':
            game.setDirection(Direction.UP);
            break;
        case 'down':
            game.setDirection(Direction.DOWN);
            break;
        case 'left':
            game.setDirection(Direction.LEFT);
            break;
        case 'right':
            game.setDirection(Direction.RIGHT);
            break;
    }
});

// Boucle de jeu
const interval = setInterval(() => {
    if (!game.tick()) {
        clearInterval(interval);
        process.exit();
    }
    game.display();
}, 1000);