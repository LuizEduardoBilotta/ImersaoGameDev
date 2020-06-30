class InitialScene {
    constructor() {

    }

    draw() {
        this._drawBackgroundImage();
        this._drawText();  
        this._drawButton();  
    }

    _drawBackgroundImage() {
        image(imageInitalScene, 0, 0, width, height);
    }

    _drawText() {
        textAlign(CENTER);
        textSize(100);
        textFont(initialFont);
        stroke('#fff');
        strokeWeight(2);
        text('As aventuras de', width / 2, 250);
        textSize(150);
        text('Hipsta', width / 2, 400);
    }

    _drawButton() {
        managerButton.positionY = height / 6 * 4.5;
        managerButton.draw();
    }
}