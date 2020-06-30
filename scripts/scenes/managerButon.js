class ManagerButton {
    constructor(text, positionX, positionY) {
        this.text = text;
        this.positionX = positionX;
        this.positionY = positionY;
        this.button = createButton(this.text);
        this.button.addClass('initialSceneButton');
        this.button.mousePressed(() => this._alterScene());
    }

    draw() {
        this.button.position(this.positionX, this.positionY);
        this.button.center('horizontal');
    }

    _alterScene() {
        this.button.remove();
        currentlyScene = 'level01';
        soundGame.loop();
    }
}