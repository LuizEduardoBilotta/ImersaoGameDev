let imageScenario;
let imageCharacter;
let imageCharacterEnemy;

let scenario;
let soundGame;
let character;
let characterEnemy;

function preload() {
  
  imageScenario = loadImage('./imagens/cenario/floresta.png');
  imageCharacter = loadImage('./imagens/personagem/correndo.png');
  imageCharacterEnemy = loadImage('./imagens/inimigos/gotinha.png');
  soundGame = loadSound('sons/trilha_jogo.mp3');
}

function keyPressed() {
  //32 (SPACE) - keycode ASCII Table
  if (keyCode === 32) {
    character.jump();
  }
}

function setup() {
  
  let cnv = createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenario, 3);
  character = new Character(imageCharacter, 0, 110, 135, 220, 270, 4, 4);
  characterEnemy = new CharacterEnemy(imageCharacterEnemy, width - 60, 60, 60, 105, 100, 7, 4);
  
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

  characterEnemy.show();
  characterEnemy.move();

  

  
}


