class CharacterEnemy extends Animation {
    
    constructor(imageCharacter, positionXCharacter, variationPositionY, widthFrame, heightFrame, widhtSprite, 
                 heightSprite, numberLinesSprites, numberColumnsSprites, speed) {
        
        super (imageCharacter, positionXCharacter, variationPositionY, widthFrame, heightFrame, widhtSprite, 
               heightSprite, numberLinesSprites, numberColumnsSprites)

        this.speed = speed;  
        this.positionXCharacter = width;      

    }

    move() {
        this.positionXCharacter = this.positionXCharacter - this.speed;
        
        if(this.positionXCharacter < -this.widthFrame){
            this.positionXCharacter = width;
        }
    }

    //showPosition() {
        //this.positionXCharacter = width;
    //}

    randowSpeed(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}