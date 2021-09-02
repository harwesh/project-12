var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX
createApple()
createorangeLeaf()
  drawSprites();
}

function createApple(){
  if (frameCount%80===0) {
    
   var apple = createSprite(random(10,390),-10,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.03
  apple.velocityY = 6
  apple.lifetime = 70
  }
}
  function createorangeLeaf(){
    if (frameCount%80===0) {
      
   var orangeLeaf = createSprite(random(50,300),-10,10,10);
    orangeLeaf.addImage(orangeLeafImg);
    orangeLeaf.scale = 0.03
    orangeLeaf.velocityY = 3
    orangeLeaf.lifetime = 150
    }
  }

