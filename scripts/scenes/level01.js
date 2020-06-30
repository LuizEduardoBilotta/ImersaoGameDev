class Level01 {
    constructor() {
        //this.currentlyEnemy = 0;
        this.index = 0;
        this.map = tape.map;
        
    }

    setup() {
        scenario = new Scenario(imageScenario, 3);
        character = new Character(imageCharacter, 0, 30, 110, 135, 220, 270, 4, 4);
        
        const characterEnemy = new CharacterEnemy(imageCharacterEnemy, width - 60, 30, 60, 60, 105, 100, 7, 4, 10);
        const characterEnemyTroll = new CharacterEnemy(imageCharacterEnemyTroll, width, 0, 240, 240, 475, 477, 6, 5, 20);
        
        points = new Points();
        life = new Life(tape.settings.lifeMax, tape.settings.lifeInitial);
      
        enemys.push(characterEnemy, characterEnemyTroll);
    }

    keyPressed(key) {
    //32 (SPACE) - keycode ASCII Table
        if (key === 32) {
            character.jump();
            jumpSoundCharacter.play();
        }
    }

    draw() {
        scenario.show();
        scenario.move();


        character.show();
        character.applicationGravity();

        const currentlyLine = this.map[this.index];
        
        const enemy = enemys[currentlyLine.enemyMap];
        const enemyVisible = enemy.positionXCharacter < -enemy.widthFrame + 20;
        enemy.speed = currentlyLine.speedMap;

        enemy.show();
        enemy.move();
        
        if(enemyVisible){
            this.index++;
            enemy.show();

            if(this.index > this.map.length - 1) {
            this.index = 0;
            } 
        }   

        if(character.collide(enemy)) {
            soundColision.play();
            life.setLife();
            character.getInvencible();

            if(life.currentlyLife === 0){
                image(imageGameOver, windowWidth/2 - 200, windowHeight/3);
                noLoop();
                soundGame.stop();
                soundGameOver.play();
            }    
        }

        points.show();
        points.sumPoint();

        life.draw();
    }
    
}