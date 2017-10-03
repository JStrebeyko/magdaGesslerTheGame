console.log('hello')


class Madga {
    constructor(x, y, direction) {
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

    this.index = function(x,y) {
      return x + (y * 10);
    }
    showMadga() {
        this.board[ this.index(this.magda.x,this.magda.y) ].classList.add('magda');
    }

    showFood() {
        this.board[ this.index(this.magda.x,this.magda.y) ].classList.add('food');

    }
    const board = document.querySelectorAll("#board div");
    const magda = new Magda();
    const food = new Food();
    const score = 0;
}
