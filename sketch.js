let imageScenario;
let imageCharacter;
let imageCharacterEnemy;
let imageCharacterEnemyTroll;
let imageGameOver;

let scenario;

let character;
let characterEnemy;
let characterEnemyTroll;

let soundGame;
let jumpSoundCharacter;

let points;

const enemys = [];

function preload() {
  
  imageScenario = loadImage('./imagens/cenario/floresta.png');
  imageCharacter = loadImage('./imagens/personagem/correndo.png');
  imageCharacterEnemy = loadImage('./imagens/inimigos/gotinha.png');
  imageCharacterEnemyTroll = loadImage('./imagens/inimigos/troll.png');
  imageGameOver = loadImage('./imagens/assets/game-over.png');
  soundGame = loadSound('sons/trilha_jogo.mp3');
  jumpSoundCharacter = loadSound('./sons/jumpSoundCharacter.mp3');

}

function keyPressed() {
  //32 (SPACE) - keycode ASCII Table
  if (keyCode === 32) {
    character.jump();
    jumpSoundCharacter.play();
  }
}

function setup() {
  
  let cnv = createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenario, 3);
  character = new Character(imageCharacter, 0, 30, 110, 135, 220, 270, 4, 4);
  const characterEnemy = new CharacterEnemy(imageCharacterEnemy, width - 60, 30, 60, 60, 105, 100, 7, 4, 100);
  const characterEnemyTroll = new CharacterEnemy(imageCharacterEnemyTroll, width, 0, 240, 240, 475, 477, 6, 5, 2500);
  points = new Points();

  enemys.push(characterEnemy, characterEnemyTroll);
  
  cnv.mousePressed(() => {
    soundGame.loop();
  });
  
  frameRate(30);
}

function draw() {
  
  scenario.show();
  scenario.move();

  character.show();
  character.applicationGravity();

  enemys.forEach(enemy => {
    enemy.show();
    enemy.move();

    if(character.collide(enemy)) {
      image(imageGameOver, windowWidth/2 - 200, windowHeight/3);
      noLoop();
    }
  });

  points.show();
  points.sumPoint();
}


