class Scenario {

    constructor(image, speed) {
    
      this.image = image;
      this.speed = speed;
      this.x1 = 0;
      this.x2 = windowWidth;
      
    }
    
    show() {

        image(this.image, this.x1, 0, windowWidth, windowHeight);
        image(this.image, this.x2, 0, windowWidth, windowHeight);
    }
    
    move() {
      
      this.x1 = this.x1 - this.speed;
      this.x2 = this.x2 - this.speed;
      
      if(this.x1 < -windowWidth) {
        this.x1 = windowWidth;
      }
      
      if(this.x2 < -windowWidth) {
        this.x2 = windowWidth;
      }
      
    }  
  }