class Character extends Animation{

    constructor(imageCharacter, positionXCharacter, widthFrame, heightFrame, widhtSprite, 
                heightSprite, numberLinesSprites, numberColumnsSprites) {

        super (imageCharacter, positionXCharacter, widthFrame, heightFrame, widhtSprite, 
               heightSprite, numberLinesSprites, numberColumnsSprites)

        this.gravity = 3;
        this.heightJump = 0;
        this.positionYCharacterInitial = height - this.heightFrame;       
        this.positionYCharacter = this.positionYCharacterInitial;
        this.counterJump = 0;
    }

    jump() {
      if ((this.counterJump < 2) && (this.positionYCharacter === this.positionYCharacterInitial)) {
        this.heightJump = - 30;
        this.counterJump ++;
      } else {
        this.counterJump = 0;
      }
      
    }

    
    applicationGravity() {
      this.positionYCharacter += this.heightJump;
      this.heightJump += this.gravity;

      if (this.positionYCharacter > this.positionYCharacterInitial) {
        this.positionYCharacter = this.positionYCharacterInitial;
      }
      console.log(`PosicaoY: ${this.positionYCharacter}, PosicaoYInicial: ${this.positionYCharacterInitial}`);
    }
}
   