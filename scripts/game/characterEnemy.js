class CharacterEnemy extends Animation {
    
    constructor(imageCharacter, positionXCharacter, variationPositionY, widthFrame, heightFrame, widhtSprite, 
                 heightSprite, numberLinesSprites, numberColumnsSprites, delay) {
        
        super (imageCharacter, positionXCharacter, variationPositionY, widthFrame, heightFrame, widhtSprite, 
               heightSprite, numberLinesSprites, numberColumnsSprites)

        this.speed = 0;  
        this.delay = delay;
        this.positionXCharacter = width + this.delay;      

    }

    move() {
        this.speed = this.randowSpeed(3, 12);
       
        this.positionXCharacter = this.positionXCharacter - this.speed;

        if (this.positionXCharacter < -this.widthFrame) {
            this.positionXCharacter = width;
        }
    }

    randowSpeed(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}