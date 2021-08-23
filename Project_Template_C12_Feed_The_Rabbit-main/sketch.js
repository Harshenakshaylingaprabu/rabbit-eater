var garden,rabbit,apple,Leaves,red_falling,orangeleaf_falling
var gardenImg,rabbitImg,appleImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  red_falling=loadImage("redImage.png")
  orangeleaf_falling=loadImage("orangeLeaf.png")
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


function createApples() { 
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.velocityY=5
  apple.scale=0.08
  apple.lifetime=150

}

function createRed() { 
  redleaf = createSprite(random(50,350),40,10,10)
  redleaf.addImage(red_falling)
  redleaf.velocityY=5
  redleaf.scale=0.08
  redleaf.lifetime=150
}

function createOrange() { 
  orangeleaf = createSprite(random(50,350),40,10,10)
  orangeleaf.addImage(orangeleaf_falling)
  orangeleaf.velocityY=5
  orangeleaf.scale=0.08
  orangeleaf.lifetime=150

}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  

  var select_sprites =Math.round(random(1,2))

  if(frameCount % 80 == 0){ 
    if(select_sprites==1){
      createApples();
    }
    else if (select_sprites==2) {
      createOrange()
    }else {
      createRed()
    }
    

  }

  drawSprites();
}