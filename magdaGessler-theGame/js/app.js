console.log('hello')


class Madga {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = "right";
    }
}

class Food {
    constructor(){
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }
}

class Game {
    constructor() {
    this.board = document.querySelectorAll("#board div");
    this.magda = new Magda();
    this.food = new Food();
    this.score = 0;
    }

    index(x,y) {
      return x + (y * 10);
    }
    showMadga() {
        this.board[this.index(this.magda.x,this.magda.y)].classList.add('magda');
    }

    showFood() {
        this.board[this.index(this.food.x,this.food.y)].classList.add('food');

    }
}

let theGame = new Game;
theGame.showMadga()
