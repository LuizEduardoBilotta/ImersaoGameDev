class Life {
    constructor(lifeMax, lifeInitial) {
        this.lifeMax = lifeMax;
        this.lifeInitial = lifeInitial;
        this.currentlyLife = lifeInitial;

        this.widthLife = 40;
        this.heightLife = 40;
        this.positionXInitial = 20;
        this.positionY = 20;
        
    }

    draw() {
        for (let i = 0; i < this.currentlyLife; i++ ) {
            const margin = i * 25;
            const position = this.positionXInitial * (i + 1);
            image(imageLife, position + margin, this.positionY, this.widthLife, this.widthLife);
        }   
    }

    getLife() {
        if(this.currentlyLife < this.lifeMax) {
            this.currentlyLife++;
        }
    }

    setLife() {
        this.currentlyLife--;
    }
}