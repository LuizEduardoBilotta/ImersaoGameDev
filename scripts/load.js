function preload() {
  
    imageScenario = loadImage('./imagens/cenario/floresta.png');
    imageInitalScene = loadImage('../imagens/telaInicial/background_tela_inicial.jpg');
    imageCharacter = loadImage('./imagens/personagem/correndo.png');
    imageCharacterEnemy = loadImage('./imagens/inimigos/gotinha.png');
    imageCharacterEnemyTroll = loadImage('./imagens/inimigos/troll.png');
    imageGameOver = loadImage('./imagens/assets/game-over.png');
    imageLife = loadImage('../imagens/life/health_potion.png');

    tape = loadJSON('../tape/tape.json');

    soundGame = loadSound('sons/trilha_jogo.mp3');
    jumpSoundCharacter = loadSound('./sons/jumpSoundCharacter.mp3');
    soundGameOver = loadSound('../sons/game_over_sound.mp3');
    soundColision = loadSound('../sons/colisao.ogg');

    initialFont = loadFont('../fontes/Wonderland Scratch.ttf');
  
  }