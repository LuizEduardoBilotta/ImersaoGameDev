class Animation {

    constructor ( imageCharacter, positionXCharacter, variationPositionY, widthFrame, heightFrame, widhtSprite, 
                  heightSprite, numberLinesSprites, numberColumnsSprites ) {
        
        this.imageCharacter = imageCharacter;
        this.positionXCharacter = positionXCharacter;
        this.variationPositionY = variationPositionY;
        this.positionYCharacter = windowHeight - heightFrame - variationPositionY;
        this.widthFrame = widthFrame;
        this.heightFrame = heightFrame;
        this.widhtSprite = widhtSprite;
        this.heightSprite = heightSprite;
        this.numberLinesSprites = numberLinesSprites;
        this.numberColumnsSprites = numberColumnsSprites;
        
        this.linePosition = 0;
        this.columnPosition = 0;

        this.matrixPosition = this.calculatorMatrix();
    }


    show() {
        image(
          this.imageCharacter, this.positionXCharacter, this.positionYCharacter, this.widthFrame, this.heightFrame, 
          this.matrixPosition[this.linePosition][this.columnPosition][0], 
          this.matrixPosition[this.linePosition][this.columnPosition][1], 
          this.widhtSprite, this.heightSprite);
          
          this.animationCharacter();
      }


    animationCharacter() {
          
        if (this.columnPosition >= this.numberColumnsSprites - 1) {
          this.columnPosition = -1;
          this.linePosition++;
        }
  
        if (this.linePosition - 1 >= this.numberLinesSprites - 1) {
          this.linePosition = 0;
        }
        
        this.columnPosition ++;
      }


    calculatorMatrix() {
        let numberX = 0;
        let numberY = 0;
        let matrix = new Array(this.numberLinesSprites);

        for(let i = 0; i < this.numberLinesSprites; i++) {
          
          matrix[i] = new Array(this.numberColumnsSprites);
          
          for(let j = 0; j < this.numberColumnsSprites; j++) {
            matrix[i][j] = [numberX, numberY];
            numberX += this.widhtSprite;
            } 

            numberY += this.heightSprite;
            numberX = 0;   
        }
        return matrix;
    }
}