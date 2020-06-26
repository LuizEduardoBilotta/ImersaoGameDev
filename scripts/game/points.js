class Points {
    constructor() {
        this.point = 0;
    }

    show() {
        textAlign(RIGHT);
        fill('#fff');
        textSize(50);
        text(parseInt(this.point), windowWidth - 30, 50);
    }

    sumPoint() {
      this.point+= 0.2;  
    }
}