function keyPressed() {
  level01.keyPressed(keyCode);
}

function setup() {
  
  let cnv = createCanvas(windowWidth, windowHeight);
  level01 = new Level01();
  initialScene = new InitialScene();
  managerButton = new ManagerButton('Iniciar', width /2, 525);

  level01.setup();
  scenes = {
    level01,
    initialScene
  };
  
  //cnv.mousePressed(() => {
    //soundGame.loop();
  //});
  
  frameRate(30);
}

function draw() {
  
  scenes[currentlyScene].draw();
}


