class Character extends Animation{

    constructor(imageCharacter, positionXCharacter, variationPositionY, widthFrame, heightFrame, widhtSprite, 
                heightSprite, numberLinesSprites, numberColumnsSprites) {

        super (imageCharacter, positionXCharacter, variationPositionY, widthFrame, heightFrame, widhtSprite, 
               heightSprite, numberLinesSprites, numberColumnsSprites)

        this.gravity = 6;
        this.speedJump = 0;
        this.heightJump = -55;
        this.positionYCharacterInitial = height - this.heightFrame - this.variationPositionY;       
        this.positionYCharacter = this.positionYCharacterInitial;
        this.counterJump = 0;
        this.invencible = false;
    }

    jump() {
      if (this.counterJump < 2) {
        this.speedJump = this.heightJump;
        this.counterJump ++;
      }
      
    }

    
    applicationGravity() {
      this.positionYCharacter += this.speedJump;
      this.speedJump += this.gravity;

      if (this.positionYCharacter > this.positionYCharacterInitial) {
        this.positionYCharacter = this.positionYCharacterInitial;
        this.counterJump = 0;
      }
    }

    getInvencible() {
      this.invencible = true;
      setTimeout(() => {
        this.invencible = false
      }, 1000);
    }

    collide(characterEnemy) {
      if(this.invencible) {
        return false;
      }
      
      const collided = collideCircleCircle(this.positionXCharacter, this.positionYCharacter, this.widthFrame,
                                           characterEnemy.positionXCharacter, characterEnemy.positionYCharacter, characterEnemy.widthFrame);
      
                      /*collideRectRect(this.positionXCharacter, this.positionYCharacter, this.widthFrame, this.heightFrame,
                      characterEnemy.positionXCharacter, characterEnemy.positionYCharacter, 
                      characterEnemy.widthFrame, characterEnemy.heightFrame) 
                      */
      return collided;
    }
}
   